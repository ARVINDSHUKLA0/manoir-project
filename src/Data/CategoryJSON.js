// import CetgoryImgOne from '/assets/img/CategoryOne.jpg'










// import CategImg1 from '/assets/img/Product1.webp'
// import CategImg2 from '/assets/img/Product2.webp'
// import CategImg3 from '/assets/img/Product3.webp'
// import CategImg4 from '/assets/img/Product1.webp'
// import CategImg5 from '/assets/img/Product2.webp'
// import CategImg6 from '/assets/img/Product3.webp'


// const CategoryJSON = [
 
//     {id : 1, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne, images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 2, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 3, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 4, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 5, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 6, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 7, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 8, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 9, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
//     {id : 10, CategoryName : 'byron emperador', subTitle : 'in american white oak designed by harrison & nicholas candos', CetgoryChater: 'dining table starting at', price : "4195" , MrpPrice : '5595', categoryImg : CetgoryImgOne,images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6] },
// ]

// export default CategoryJSON 



// src/Data/CategoryJSON.js
import CetgoryImgOne from '/assets/img/CategoryOne.jpg';
import CategImg1 from '/assets/img/Product1.webp';
import CategImg2 from '/assets/img/Product2.webp';
import CategImg3 from '/assets/img/Product3.webp';
import CategImg4 from '/assets/img/Product1.webp';
import CategImg5 from '/assets/img/Product2.webp';
import CategImg6 from '/assets/img/Product3.webp';

const CategoryJSON = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  CategoryName: 'byron emperador',
  subTitle: 'in american white oak designed by harrison & nicholas candos',
  CetgoryChater: 'dining table starting at',
  price: "4195",
  MrpPrice: '5595',
  categoryImg: CetgoryImgOne,
  images: [CategImg1, CategImg2, CategImg3, CategImg4, CategImg5, CategImg6],
}));

export default CategoryJSON;
