module.exports = ({ env }) => ({
    upload: {
		// update your cloudinary credential here
        provider: "cloudinary",
        providerOptions: {
            cloud_name: "...",
            api_key: "...",
            api_secret: "...",
        },
    },
});