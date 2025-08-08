import ratelimit from "../config/upstash.js";

const rateLimitter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key");//replace "my-limit-key" with userid for per user rate limit
        if(!success){
            return res.status(429).json({
                message: "Too many requests, try again later"
            })
        }
        next();
    } catch (error) {
        console.error("Error in rateLimitter.js", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default rateLimitter;