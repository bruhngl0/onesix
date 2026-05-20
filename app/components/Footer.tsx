"use client";

import { Image, ImageKitProvider } from "@imagekit/react";

export default function Footer() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap');

        .footer {
          position: relative;
          width: 100%;
          max-height: 70vh;
          background: #000;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: 'Barlow Condensed', sans-serif;
          color: #fff;
        }

        /* ── Background image ── */
        .footer-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          opacity: 0.9;
          pointer-events: none;
          display: block;
        }

        /* ── All content above bg ── */
        .footer-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 70vh;
          padding: 28px 20px 24px 20px;
        }

        /* ── Top row ── */
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .footer-newsletter {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-newsletter:hover { color: #fff; }

        .footer-contact {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-contact-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-contact-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .footer-contact-email {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-email:hover { color: #fff; }

        /* ── Bottom row ── */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .footer-addresses {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-city {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }

        .footer-city span {
          color: rgba(255,255,255,0.35);
          margin-right: 6px;
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
        }

        .footer-social {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.8;
        }
        .footer-social:hover { color: #fff; }

        .footer-copy {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 4px;
        }
      `}</style>

            <footer className="footer">

                {/* Background image via ImageKit */}
                <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
                    <Image
                        src="https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/footer__slaps.png?updatedAt=1779162547826"
                        alt="SLAPS footer background"
                        className="footer-bg"
                        loading="lazy"
                    />
                </ImageKitProvider>

                <div className="footer-content">

                    {/* Top */}
                    <div className="footer-top">
                        <a href="#newsletter" className="footer-newsletter">
                            Subscribe to our newsletter
                        </a>
                        <div className="footer-contact">
                            <div className="footer-contact-group">
                                <span className="footer-contact-label">Business Inquiries</span>
                                <a href="mailto:work@brandingthatslaps.com" className="footer-contact-email">
                                    work@brandingthatslaps.com
                                </a>
                            </div>
                            <div className="footer-contact-group">
                                <span className="footer-contact-label">General Inquiries</span>
                                <a href="mailto:hello@brandingthatslaps.com" className="footer-contact-email">
                                    hello@brandingthatslaps.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="footer-bottom">
                        <div className="footer-addresses">
                            <p className="footer-city"><span>NYC</span></p>
                            <p className="footer-city"><span>BCN</span> Passatge de Masoliver 10, 08003</p>
                            <p className="footer-city"><span>LDN</span> Coming Soon</p>
                        </div>

                        <div className="footer-right">
                            <a href="https://www.instagram.com/brandingthatslaps" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
                            <a href="https://www.linkedin.com/company/brandingthatslaps" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
                            <p className="footer-copy">© 2026 SLAPS. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}