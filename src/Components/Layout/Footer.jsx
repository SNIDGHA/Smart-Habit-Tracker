import { useEffect } from "react";

const Footer = () => {
    // Magic particles effect (a subtle animation)
    useEffect(() => {
        const canvas = document.getElementById("footerCanvas");
        const ctx = canvas.getContext("2d");
        const particles = [];
        let canvasWidth = window.innerWidth;
        let canvasHeight = 200;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const Particle = function (x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = (Math.random() - 0.5) * 2;
            this.dy = (Math.random() - 0.5) * 2;
            this.draw = function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`;
                ctx.fill();
            };
            this.update = function () {
                if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            };
        };

        const initParticles = () => {
            for (let i = 0; i < 100; i++) {
                const radius = Math.random() * 2 + 1;
                const x = Math.random() * (canvasWidth - radius * 2) + radius;
                const y = Math.random() * (canvasHeight - radius * 2) + radius;
                particles.push(new Particle(x, y, radius));
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            particles.forEach((particle) => particle.update());
            requestAnimationFrame(animateParticles);
        };

        initParticles();
        animateParticles();
        window.addEventListener("resize", () => {
            canvasWidth = window.innerWidth;
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        });
    }, []);

    return (
        <footer className="relative bg-gray-900 py-20">
            {/* Magic Particles Background */}
            <canvas id="footerCanvas" className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25"></canvas>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* About Us Section */}
                    <div>
                        <h4 className="text-white text-3xl font-bold mb-6">Our Vision</h4>
                        <p className="text-gray-400 text-lg">
                            We are revolutionizing AI-based face authentication by focusing on security, real-time processing, and user convenience. Join us in transforming the way the world verifies identities!
                        </p>
                    </div>
                    
                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-white text-3xl font-bold mb-6">Quick Links</h4>
                        <ul className="text-gray-400 text-lg space-y-3">
                            <li className="hover:text-white transition">
                                <a href="#about-us">About Us</a>
                            </li>
                            <li className="hover:text-white transition">
                                <a href="#features">Features</a>
                            </li>
                            <li className="hover:text-white transition">
                                <a href="#team">Our Team</a>
                            </li>
                            <li className="hover:text-white transition">
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Stay Connected Section */}
                    <div>
                        <h4 className="text-white text-3xl font-bold mb-6">Stay Connected</h4>
                        <p className="text-gray-400 text-lg mb-4">Subscribe to our newsletter for the latest updates and features:</p>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-800 text-white border-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    
                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-white text-3xl font-bold mb-6">Follow Us</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-facebook text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-twitter text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-instagram text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                            </li>
                        </ul>
                        <p className="text-gray-500 text-lg mt-6">
                            Let&apos;s stay connected on social media to see our latest achievements and updates.
                        </p>
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className="border-t border-gray-800 pt-10">
                    <p className="text-gray-500 text-center text-lg">
                        &copy; {new Date().getFullYear()} Our Project. All Rights Reserved. | Crafted with <span className="text-red-500">♥</span> by our Team.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
