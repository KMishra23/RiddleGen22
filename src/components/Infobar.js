import { useEffect, useState } from "react"

import ZooFC from "../images/ZoologyFlashCard.png"
import EcoFC from "../images/EconomicsFC.png"
import LawFC from "../images/LawFC.png"

export default function Infobar(props) {
  const[img, setIMG] = useState();

  const ImageOnRight = (e) => {
    if(props.img === "ZoologyFC") setIMG(ZooFC)
    else if(props.img === "EconomicsFC") setIMG(EcoFC)
    else if(props.img === "LawFC") setIMG(LawFC)
  } 

  useEffect(() => {
    ImageOnRight()
    // console.log("Infobar after render")
  }, [])

  return ( 
    <section className="Infobar">
      <img src={img} />
    </section>
  )
}
