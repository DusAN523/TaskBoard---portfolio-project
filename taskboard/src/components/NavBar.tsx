import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ThemeMode = "light" | "dark";

export const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const userInitials = "JD";

  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setMainMenuOpen(false);
        setLanguageMenuOpen(false);
        setThemeMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMainMenu = () => {
    setMainMenuOpen(!mainMenuOpen);
    if (mainMenuOpen) {
      setLanguageMenuOpen(false);
      setThemeMenuOpen(false);
    }
  };

  const openLanguageMenu = () => {
    setLanguageMenuOpen(true);
    setThemeMenuOpen(false);
  };

  const openThemeMenu = () => {
    setThemeMenuOpen(true);
    setLanguageMenuOpen(false);
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setMainMenuOpen(false);
    setLanguageMenuOpen(false);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setTheme(mode);
    document.body.setAttribute("data-theme", mode);
    setMainMenuOpen(false);
    setThemeMenuOpen(false);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className="flex shadow-none border-b border-gray-200 bg-white"
    >
      <Toolbar className="flex justify-between">
        <Box className="flex items-center gap-2">
          <CheckBoxIcon color="primary" />
          <Typography
            variant="h6"
            className="font-bold text-gray-800 select-none"
          >
            TaskBoard
          </Typography>
        </Box>
        <Box className="flex items-center gap-2 relative" ref={avatarRef}>
          <Button
            color="inherit"
            onClick={() => navigate("/signin")}
            className="capitalize text-gray-700"
          >
            {t("navbar.signIn")}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/signup")}
            className="capitalize"
          >
            {t("navbar.signUp")}
          </Button>

          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "#e0e7ef",
              color: "#374151",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
            onClick={toggleMainMenu}
          >
            {userInitials}
          </Avatar>

          {mainMenuOpen && (
            <div
              className="absolute right-10 mt-10 w-52 bg-white border border-gray-300 rounded-md shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={openLanguageMenu}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                <LanguageIcon fontSize="small" />
                <span>{t("navbar.language.title")}</span>
              </button>
              <button
                onClick={openThemeMenu}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                {theme === "light" ? (
                  <Brightness7Icon fontSize="small" />
                ) : (
                  <Brightness4Icon fontSize="small" />
                )}
                <span>{t("navbar.theme.title")}</span>
              </button>
            </div>
          )}

          {languageMenuOpen && (
            <div
              className="absolute right-40 top-10 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 ${
                  i18n.language === "en" ? "bg-gray-200" : ""
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <span>{t("navbar.language.en")}</span>
              </button>
              <button
                onClick={() => handleLanguageChange("sk")}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 ${
                  i18n.language === "sk" ? "bg-gray-200" : ""
                }`}
              >
                <span className="text-lg">🇸🇰</span>
                <span>{t("navbar.language.sk")}</span>
              </button>
            </div>
          )}

          {themeMenuOpen && (
            <div
              className="absolute right-40 top-20 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => handleThemeChange("light")}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 ${
                  theme === "light" ? "bg-gray-200" : ""
                }`}
              >
                <Brightness7Icon fontSize="small" />
                <span>{t("navbar.theme.light")}</span>
              </button>
              <button
                onClick={() => handleThemeChange("dark")}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 ${
                  theme === "dark" ? "bg-gray-200" : ""
                }`}
              >
                <Brightness4Icon fontSize="small" />
                <span>{t("navbar.theme.dark")}</span>
              </button>
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
