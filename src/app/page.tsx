import Image from "next/image";
import styles from "./page.module.css";
import FeaturedPizza from "@/components/FeaturedPizza";
import { BottomNavigation, Box } from "@mui/material";
import Hero from "@/components/Hero";
import TopRestaurant from "@/components/TopRestaurant";
import PopularPizza from "@/components/PopularPizza";
import Footer from "@/components/Footer";
import FastingPizza from "@/components/FastingPizza";

export default function Home() {
  return (
    <Box>
      <Hero/>
      <FeaturedPizza/>
      <TopRestaurant/>
      <PopularPizza/>
      <FastingPizza/>
      <Footer/>
    </Box>
  );
}
