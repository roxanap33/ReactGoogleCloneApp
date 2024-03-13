import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { HeaderLogoContainer } from "../assets/styles/HomeStyles";

interface LogoData {
  startDate: string;
  endDate: string;
  imagePath: string;
  description: string;
}

export default function LogoDisplay({}) {
  const [logos, setLogos] = useState<LogoData[]>([]);
  const currentDate = new Date().toLocaleDateString();
  const animatedLogos: LogoData[] = [];
  const basicLogo: LogoData[] = [];

  useEffect(() => {
    fetchLogo();
  }, [currentDate]);

  const fetchLogo = async () => {
    const q = query(collection(db, "results/google-logos/logos"));
    const getLogoDoc = await getDocs(q);
    if (!getLogoDoc.empty) {
      const logosArray: LogoData[] = getLogoDoc.docs.map((doc) => ({
        startDate: doc.data().startDate as string,
        endDate: doc.data().endDate as string,
        imagePath: doc.data().imagePath as string,
        description: doc.data().description as string,
      }));
      setLogos(logosArray);
    }
  };

  logos.forEach((l) => {
    if (l.startDate !== "" && l.endDate !== "") {
      const endDate = new Date(l.endDate);
      const startDate = new Date(l.startDate);
      const current = new Date(currentDate);

      if (endDate >= current && current >= startDate) {
        animatedLogos.push(l);
      }
    } else {
      basicLogo.push(l);
    }
  });
  const filteredLogos: LogoData[] =
    animatedLogos.length === 1 ? animatedLogos : basicLogo;

  return (
    <>
      {filteredLogos.map((logo, index) => (
        <div key={index}>
          <img src={logo.imagePath} alt={logo.description} />
        </div>
      ))}
    </>
  );
}
