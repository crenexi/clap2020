module.exports = {
  dist: './dist/**',
  awsS3: {
    region: 'us-west-1',
    buckets: {
      production: 'www.clap2020.com',
    },
    profile: 's3-deploy',
    headers: {
      'x-amz-acl': 'bucket-owner-full-control',
      'Cache-Control': 'max-age=315360000, no-transform, public',
    },
  },
};
