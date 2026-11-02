export default function BottleCutout() {
  return (
    <figure className="cutout-hero">
      <picture>
        <source srcSet="img/borraccia-scontornata.webp" type="image/webp" />
        <img
          src="img/borraccia-scontornata.png"
          width="337"
          height="1002"
          alt="La borraccia FairWater in Tritan, con tappo in acciaio, il logo e il codice QR sull'etichetta"
          decoding="async"
        />
      </picture>
      <figcaption>La borraccia FairWater, in Tritan senza BPA</figcaption>
    </figure>
  );
}
