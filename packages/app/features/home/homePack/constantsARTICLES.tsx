
import images from '../../../../Images'
import { EXOPLANETS } from '../../articles/exoplanets/constTEXT'
import { ArticleInfo } from '../../articles/starsBegin1/articleOBJ'

const fullArticles = {
  stars: ArticleInfo.text[0],
  exoplanets: EXOPLANETS,
  stars2: ""
}

// Constants
const ARTICLES = [
    {
      title: ['Stars for beginners - Mostly everything is this'],
      text: [
        `The universe, is mostly up and down quarks. Each one of the stars above and, in fact, almost everything else around you, yourself included, is
        just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the up
        quark and -1/3 for the down one. You can remember that "up" means positive and "down"
        means negative, and also that "up" means more of charge than the "down". So if you take two up...`,
      ],
      image: images.quarks2.src,
      imageHeight: 360,
      imageTitle: "Proton and quarks",
      link: '/articles/starsBegin1',
      fullText: fullArticles.stars,
    },
    {
      title: ['Stars for beginners - They are all the same'],
      text: [
        `All stars are just spheres of hydrogen buring into helium under the pressure of gravity. 4 separate protons trying to merge and change into a nucleus of 2 protons and 2 neutrons. Imagine a gas cloud the mass of Saturn collapsing to form a planet. That planet as well as the biggest star is mostly the same stuff - hydrogen. You can keep adding hydrogen, doubling its mass and it will contract and heat up under the increasing gravity, but it will not be hot enough to fuse hydrogen into helium untill its about 80 times the mass of Jupiter. Before that happens, an object the mass of between 14 to 80 Jupiter masses, we call that a failed star, as it never ignites and is only visible from the faint glow if its matter...`, 
      ],
      image: images.starsizes.src,
      imageHeight: 400,
      imageTitle: "Star sizes",
      link: '/articles/starsBegin2',
      fullText: fullArticles.stars2,
    },
    {
      title: ['Exoplanets within 10 light years'],
      text: [
        `When I say Earth 2.0, I mean an exoplanet that has a chance of having Earth-like life. That means similar orbits, similar atmospheres, similar planetary composition, similar amounts of time to develop, similar parent stars, and even similar neighboring planets, though I won’t get into that too much in this article. In this article and the upcoming series let’s investigate the existing stars and exoplanets and see if any of them fit the criteria laid out to make sure that it is a viable planet for Earth-type life.`, 
      ],
      image: images.exoplanetList.src,
      imageHeight: 300,
      imageTitle: "Exoplanets",
      link: 'https://medium.com/@goingoffroad/where-is-the-closest-earth-2-0-there-are-none-within-10-light-years-22448ccb88e3',
      fullText: fullArticles.exoplanets,
    },
  ]

export default ARTICLES