enum Membership {
    Simple, 
    Standart,
    Premium
}

const membership =  Membership.Standart
const membershipreverse = Membership[2]

console.log(membership);
console.log(membershipreverse);

//==============================

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTA = 'INSTA'
}

const social = SocialMedia.INSTA
console.log(social);
