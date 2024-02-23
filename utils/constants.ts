import { ReactElement } from "react";
type AppNavigation = {sage: boolean , symbol : string ,icon : string , option: string } | {icon: ReactElement| string , option: string };
export const appNavigation: Readonly<AppNavigation[]> = [
    {
        icon: "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-dumbell-healthy-wanicon-lineal-color-wanicon.png",
        option: "Fitness Challenges",
      },
      {
        icon: "https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png",
        option: "Soulful Melodies",
      },
      {
        icon: "https://img.icons8.com/nolan/64/microphone.png",
        option: "Podcasts"
      },
      {
        icon: "https://img.icons8.com/bubbles/50/netflix.png",
        option: "Movies "
      },
      {
        icon: "https://img.icons8.com/color/48/books.png",
        option: "Books"
      },
      {
        icon: "https://img.icons8.com/color/48/cosmetic-brush.png",
        option: "Creative Activities",
      }
    
] as const;

