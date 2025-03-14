import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useLanguage = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  const changeLanguage = (newLang) => {
    if (lang !== newLang) {
      const pathSegments = location.pathname.split("/"); // 📌 URL segmentlarini olish
      pathSegments[1] = newLang; // 📌 Tilni yangilash
      const newPath = pathSegments.join("/"); // 📌 Yangi URL yaratish

      navigate(newPath, { replace: true }); // ✅ URL ni o'zgartirish
    }
  };

  return { lang: lang ?? "uz", changeLanguage };
};
