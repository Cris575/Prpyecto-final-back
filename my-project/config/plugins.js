module.exports = () => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: "AKIATCKATRHHF75T6YEZ",
            secretAccessKey: "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",
          },
          region: "us-east-2",
          params: {
            ACL: "public-read",
            signedUrlExpires: 15 * 60,
            Bucket: "e-comerce2",
          },
        },
      },
    },
  },
});
