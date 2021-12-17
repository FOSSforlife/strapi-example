module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '749042e392560d11bf9fc06896d6d200'),
  },
});
