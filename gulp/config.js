module.exports = {
  awsS3: {
    region: 'us-west-1',
    buckets: {
      prod: 'clap2020.com',
    },
    profile: 's3-deploy',
    headers: {
      'Cache-Control': 'max-age=0, no-transform, public',
    },
  },
};
