import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  monthsShort: [
    "Янв",
    "Февр",
    "Марта",
    "Апр",
    "May",
    "Июня",
    "Июля",
    "Авг",
    "Сент",
    "Окт",
    "Ноя",
    "Дек",
  ],
});

export const formateDate = (timestamp: string) => {
  const date = dayjs(timestamp);
  return date.format("D MMM в HH:mm");
};
