import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mt-8">
      <Box className="flex flex-1 flex-col gap-3">
        <Typography
          variant="h3"
          component="h1"
          className="font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: t("home.title") }}
        />
        <Typography variant="body1" className="mb-6 text-lg text-gray-600">
          {t("home.description")}
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/signup">
          {t("home.buttonText")}
        </Button>
      </Box>
      <Box className="flex-1 flex justify-center">
        <img
          src="/images/task-board.png"
          alt={t("home.description")}
          className="w-72 h-72 object-contain"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};
