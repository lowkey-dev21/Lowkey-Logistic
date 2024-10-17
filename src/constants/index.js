export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "fleets",
    title: "Fleets",
    path: "fleets",
  },
  {
    id: "bookings",
    title: "Bookings",
    path: "bookings",
  },
  {
    id: "contactUS",
    title: "Contact Us",
    path: "contactUs",
  },
];

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

import { deliveryImg, deliverToday, nextDay, multiDrop } from "../assets";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Same Day Delivery",
    content:
      "We provide fast and reliable same-day courier services for industries including aerospace, automotive, manufacturing, healthcare and more.",
    backgroundImage: deliveryImg,
  },
  {
    icon: RxPencil2,
    title: "Next Day Delivery",
    content:
      "Delivery of important business documents, parcels, and any other shipments to virtually any address throughout the uk and europe.",
    backgroundImage: deliverToday,
  },
  {
    icon: RxDesktop,
    title: "Multi Drop Delivery",
    content:
      "We provide a dedicated service to our customers who need to deliver several parcels on the same day with our specialized multi-drop courier service.",
    backgroundImage: nextDay,
  },
  {
    icon: RxReader,
    title: "Overnight Delivery",
    content:
      "We attend to our customers rapidly and respond to their critical needs to get a consignment delivered on time the next day within a tight deadline.",
    backgroundImage: nextDay,
  },
  {
    icon: RxAccessibility,
    title: "Parcels Delivery",
    content:
      "We assist many customers with parcels to be delivered nationwide to keep their reputation with their partners",
    backgroundImage: multiDrop,
  },
];

export const whyUs = [
  {
    title: "Seamless Delivery Service",
    items:
      "Your orders are delivered promptly and effectively by our knowledgeable logistics team, guaranteeing that youb receive yopur order on time and in good conditions.",
    icon: "fa-solid fa-truck-ramp-box",
    delay: 0.3,
  },
  {
    title: "Affordable Price",
    items:
      "We provide affordable service costs to every location in the Uk guaranteeing that you get the most for your money.",
    icon: "fa-solid fa-money-bills",
    delay: 0.5,
  },
  {
    title: "Professionalism",
    items:
      "Our staff members have undergone extensive training to handle your services using the most recent technology and the best standards in the business.",
    icon: "fa-solid fa-user-tie",
    delay: 0.7,
  },
  {
    title: "Excellent Customer Service",
    items:
      "The satisfaction of our customers is crucial to us because they are the reason we are in business.",
    icon: "fa-solid fa-signal",
    delay: 0.9,
  },
];
