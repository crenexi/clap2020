module.exports = {
  dist: './dist/**',
  awsS3: {
    region: 'us-west-1',
    buckets: {
      production: 'clap2020.com',
    },
    profile: 's3-deploy',
    headers: {
      'Cache-Control': 'max-age=0, no-transform, public',
    },
  },
};
