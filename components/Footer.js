"use client"
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "../i18n";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">{t("footer.contact_us")}</h3>
            <p>{t("footer.phone")}: +998 90 123 45 67</p>
            <p>{t("footer.email")}: info@tourcompany.com</p>
            <p>{t("footer.location")}: Toshkent, Uzbekistan</p>
            <p>{t("footer.working_hours")}: Dushanba - Shanba, 09:00 - 18:00</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Social Media</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank">
                <img src="/icons/facebook.svg" alt="Facebook" className="h-8" />
              </a>
              <a href="https://t.me" target="_blank">
                <img src="/icons/telegram.svg" alt="Telegram" className="h-8" />
              </a>
              <a href="https://instagram.com" target="_blank">
                <img src="/icons/instagram.svg" alt="Instagram" className="h-8" />
              </a>
              <a href="https://wa.me/998901234567" target="_blank">
                <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-8" />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-bold mb-3">{t("footer.payment_methods")}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <img src="/icons/visa.svg" alt="Visa" className="h-10" />
              <img src="/icons/mastercard.svg" alt="Mastercard" className="h-10" />
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          <p>© 2025 Tour Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
