import { ISODateString } from "next-auth"

//  helping functions goes here
export const generateDate = (date : ISODateString) => {
    let datex = new Date(date);
      let out =
        datex.toLocaleString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        }) +
        " " +
        new Intl.DateTimeFormat("en-GB", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(datex);
  
  return out
}