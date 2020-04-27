const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const AWS = require('aws-sdk');
const config = require('../config');
const logger = require('../logger');

/** Verifies a bucket name is provided */
const verifyBucketName = (bucketName) => {
  const isValid = typeof bucketName === 'string' && bucketName;

  if (!isValid) {
    logger.error('Attempted to publish without specifying bucket name!');
  } else {
    logger.info(`Publishing build to ${bucketName} S3 bucket`, 'blue.bold');
  }

  return isValid;
};

/** Returns aws configuration object to use for awspublish.create */
const getAwsConfig = (targetEnv) => {
  if (!targetEnv) return null;

  const bucketName = config.awsS3.buckets.production;

  // Use if staging bucket is added
  // const bucketName = targetEnv === 'production'
  //   ? config.awsS3.buckets.production
  //   : config.awsS3.buckets.staging;

  // Verify bucket name exists
  if (!verifyBucketName(bucketName)) { return null; }

  return {
    region: config.awsS3.region,
    params: {
      Bucket: bucketName,
    },
    credentials: new AWS.SharedIniFileCredentials({
      profile: config.awsS3.profile,
    }),
    httpOptions: {
      timeout: 300000, // five minutes
    },
  };
};

/** Publishes dist to AWS */
const publishClient = (targetEnv, done) => {
  const awsConfig = getAwsConfig(targetEnv);

  // Ensure aws config exists
  if (awsConfig === null) {
    logger.error(`Failed to publish ${targetEnv}`);
    done();
  }

  // Create publisher with S3 options
  const publisher = awspublish.create(awsConfig);

  return gulp.src(config.dist)
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(config.awsS3.headers))
    .pipe(publisher.sync())
    .pipe(awspublish.reporter({
      states: ['create', 'update', 'delete', 'cache', 'skip'],
    }));
};

/** Publish build to production bucket */
const publishProd = () => publishClient('production');

exports.publishProd = publishProd;
