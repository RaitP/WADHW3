import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        productList: [{id: 1, time: "Apr 24, 2019", description: "Bestest leib nagu", pic: "https://p.ocdn.ee/53/i/2019/4/24/lkmrs52y.guh.jpg", profilepic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png", likes: 0},
            {id: 2, pic:"",time:"Sept 30, 2022",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Sain just isaks!", likes: 0},
            {id: 3, pic:"https://static.visitestonia.com/images/3892944/600_400_false_false_d0165b791c70a3f88af617fdaaf90f64.jpg",time:"Sept 20, 2019",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Tagurpidi maja :)", likes: 0},
            {id: 4, pic:"https://tv3cdn.ee/tv3_uudised/old/pic00021-ZlLolAj.png.jpg",time:"Feb 14, 2017",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Intervjuu kitsega", likes: 0},
            {id: 5, pic:"https://i.ytimg.com/vi/4JB2dZ8PcR4/hqdefault.jpg",time:"Jun 18, 2013",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Mell on ka Kambjas", likes: 0},
            {id: 6, pic:"https://i.ytimg.com/vi/bRWc5K8-kHg/hqdefault.jpg",time:"Jan 10, 2006",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Ma olin paugu otsas kui puu käis :O", likes: 0},
            {id: 7, pic:"https://buller.ee/wp-content/uploads/2020/05/mart-helme-rail-baltic.jpg",time:"Oct 28, 2022",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Homme lahkume euroopa liidust", likes: 0},
            {id: 8, pic:"https://i.ytimg.com/vi/SxYPvwyiQxQ/maxresdefault.jpg",time:"Jul 12, 1997",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Täna oli big money kohtumine", likes: 0},
            {id: 9, pic:"https://i.ytimg.com/vi/VSGoT1CK9wI/maxresdefault.jpg",time:"Dec 2, 2017",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"Mida tühjem tünn, seda suurem kõmin", likes: 0},
            {id: 10, pic:"https://www.tallinn.ee/gal_pildid/34066.jpg",time:"Jun 18, 2013",profilepic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",description:"„Sbasibo, tavariš Putin!”", likes: 0}]
    },
    getters: {
        productListsale: (state) => {
            let productListsale = state.productList.map((post) => {
                return {
                    id: post.id,
                    time: post.time,
                    description: post.description,
                    pic: post.pic,
                    profilepic: post.profilepic,
                    likes: post.likes
                }
            });
            return productListsale
        },
    },
    mutations: {
        Likes(state, id) {
            state.productList.forEach(function(el) {
                if (id === el.id) {
                    el.likes += 1;
                }
            });

        },
        LikesReset: state => {
            state.productList.forEach(el => {
                el.likes = 0;
            })
        },
        },

    actions: {
    }
})