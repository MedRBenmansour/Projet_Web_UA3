// =============================================
// MODULE : données des recettes
// =============================================

export const recettes = [
  {
    id: 1,
    nom: "Couscous au poulet",
    pays: "dz",
    flag: "",
    categorie: "plat",
    image: "/assets/Couscous-au-poulet.jpg",
    temps: "90 min",
    personnes: 6,
    ingredients: [
      "Couscous fine 500g",
      "Poulet 1 entier",
      "Courgettes 2",
      "Carottes 3",
      "Navets 2",
      "Pois chiches",
      "Oignon 1",
      "Tomates 2",
      "Huile d'olive",
      "Ras el hanout",
      "Sel, poivre"
    ],
    etapes: [
      "Faire revenir le poulet coupé en morceaux avec l'oignon et les tomates dans une cocotte avec de l'huile d'olive.",
      "Ajouter les épices (ras el hanout, sel, poivre) et couvrir d'eau. Laisser mijoter 20 minutes.",
      "Ajouter les légumes coupés en gros morceaux et les pois chiches. Cuire encore 30 minutes.",
      "Pendant ce temps, cuire le couscous à la vapeur en la mouillant légèrement et en l'égrainant entre chaque passage.",
      "Servir le couscous dans un grand plat, napper du bouillon et disposer la viande et les légumes par-dessus."
    ]
  },
  {
    id: 2,
    nom: "Brik à l'œuf",
    pays: "tn",
    flag: "",
    categorie: "entree",
    image: "/assets/brick_a_l_oeuf.webp",
    temps: "20 min",
    personnes: 2,
    ingredients: [
      "Feuilles de brick 4",
      "Œufs 4",
      "Thon en boîte 1",
      "Câpres 1 c.à.s",
      "Persil haché",
      "Oignon finement haché",
      "Huile de friture",
      "Sel, poivre"
    ],
    etapes: [
      "Émietter le thon et le mélanger avec l'oignon haché, les câpres, le persil, sel et poivre.",
      "Déposer une feuille de brick à plat. Garnir le centre avec la préparation au thon.",
      "Faire un petit creux au centre de la garniture et casser délicatement un œuf sans le crever.",
      "Replier la feuille en demi-lune et pincer soigneusement les bords pour bien fermer.",
      "Faire frire dans l'huile bien chaude 2 à 3 minutes de chaque côté jusqu'à obtenir une belle couleur dorée. Égoutter et servir immédiatement."
    ]
  },
  {
    id: 3,
    nom: "Chorba frik",
    pays: "dz",
    flag: "",
    categorie: "soupe",
    image: "/assets/chorba.webp",
    temps: "60 min",
    personnes: 6,
    ingredients: [
      "Frik (blé vert) 200g",
      "Agneau 400g",
      "Tomates 3",
      "Oignon 1",
      "Coriandre fraîche",
      "Céleri 2 tiges",
      "Concentré de tomate 2 c.à.s",
      "Huile d'olive",
      "Cannelle, cumin",
      "Sel, poivre"
    ],
    etapes: [
      "Faire revenir la viande d'agneau coupée en morceaux avec l'oignon haché dans l'huile d'olive.",
      "Ajouter les tomates mixées, le concentré de tomate et les épices. Bien mélanger.",
      "Couvrir d'eau (environ 2L) et porter à ébullition. Laisser cuire 20 minutes.",
      "Ajouter le frik rincé ainsi que le céleri haché. Cuire à feu moyen 30 minutes en remuant régulièrement.",
      "Corriger l'assaisonnement, ajouter la coriandre fraîche ciselée et servir bien chaud."
    ]
  },
  {
    id: 4,
    nom: "Tajine zitoune",
    pays: "dz",
    flag: "",
    categorie: "plat",
    image: "/assets/Tajine.jpg",
    temps: "75 min",
    personnes: 4,
    ingredients: [
      "Poulet 1 entier",
      "Olives vertes 200g",
      "Oignons 2",
      "Citron confit 1",
      "Ail 4 gousses",
      "Safran",
      "Gingembre",
      "Huile d'olive",
      "Persil, coriandre",
      "Sel, poivre"
    ],
    etapes: [
      "Mariner le poulet avec l'ail, le gingembre, le safran, l'huile d'olive, sel et poivre pendant 30 minutes minimum.",
      "Faire dorer le poulet de tous les côtés dans une cocotte avec un peu d'huile.",
      "Ajouter les oignons émincés et laisser fondre doucement. Ajouter un verre d'eau.",
      "Incorporer les olives et le citron confit coupé en morceaux. Couvrir et cuire 45 minutes à feu doux.",
      "Parsemer de persil et coriandre frais avant de servir avec du pain."
    ]
  },
  {
    id: 5,
    nom: "Lablabi",
    pays: "tn",
    flag: "",
    categorie: "soupe",
    image: "/assets/Lablabi.jpg",
    temps: "30 min",
    personnes: 4,
    ingredients: [
      "Pois chiches cuits 400g",
      "Pain rassis",
      "Ail 5 gousses",
      "Harissa 2 c.à.s",
      "Cumin 1 c.à.c",
      "Jus de citron",
      "Huile d'olive",
      "Câpres",
      "Œufs 4",
      "Sel"
    ],
    etapes: [
      "Écraser l'ail avec le sel, le cumin et la harissa pour obtenir une pâte.",
      "Dans une casserole, faire chauffer le bouillon de pois chiches avec la pâte d'ail et la harissa.",
      "Ajouter les pois chiches et laisser mijoter 10 minutes. Rectifier l'assaisonnement.",
      "Disposer du pain rassis coupé en morceaux au fond des bols et verser la soupe chaude dessus.",
      "Garnir d'un œuf poché ou à la coque, de câpres, d'huile d'olive et d'un filet de citron."
    ]
  },
  {
    id: 6,
    nom: "Makroud",
    pays: "tn",
    flag: "",
    categorie: "dessert",
    image: "/assets/Makroud.jpg",
    temps: "50 min",
    personnes: 8,
    ingredients: [
      "Semoule fine 500g",
      "Beurre fondu 150g",
      "Dattes 300g",
      "Miel",
      "Eau de fleur d'oranger",
      "Cannelle 1 c.à.c",
      "Huile de friture",
      "Eau tiède"
    ],
    etapes: [
      "Mélanger la semoule avec le beurre fondu et un peu d'eau tiède jusqu'à obtenir une pâte souple. Laisser reposer 20 minutes.",
      "Préparer la farce : dénoyauter les dattes, les mixer avec la cannelle et l'eau de fleur d'oranger.",
      "Étaler la pâte en rectangle, placer un boudin de farce au centre et refermer la pâte autour.",
      "Couper en losanges et faire frire dans l'huile chaude jusqu'à dorure.",
      "Tremper immédiatement dans du miel chaud et laisser refroidir sur une grille."
    ]
  }
];
