import styled from "styled-components";

export const ManaCostFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ManaCostFilterContainerCenter = styled.div`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/search_middle_stretch-ea2c7bde67b73e83e192c5a6a952519dfcad9041f4eada47653141ee06d51a316268240dd2d5cd1b8ba704ce64b213cf824f82c31ac05cc7dcedd5d584d793b9.png)
    center center;
  width: 355px;
  height: 58px;
`;

export const ManaCostFilterContainerLeft = styled.div`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/search_left-3cb561cf585e6b6aded5dca35f8c16b3450db50cf6146e8699bd9a12117eede0b0e437db488e0a499755f2a442229c1c633522a26b08138350140aebab05ec31.png)
    center center;
  width: 17px;
  height: 58px;
`;

export const ManaCostFilterContainerRight = styled.div`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/search_right-9e22f78542b7f45c1fbffb80d6fe8f54bdb3bf5ba2972d0d20ce586b86e5b896a79bd9dd811dd0a846253db72c4821bf53aa0f3ea2add1efec8e374e9a62497d.png)
    center center;
  width: 17px;
  height: 58px;
`;

export const ManaCrystal = styled.button`
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/icon_mana-25ac7617a8c7f5f992660316dd307cf16b36001d1fa9693a5aca46eb01db420041018a1bbed19055f963b2421b7f615b887e84e1508be42c7b74138ee4794829.png)
      center center / contain no-repeat;
    height: 33px;
    width: 35px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    white-space: nowrap;
    color: white;
    font-family: "BelweBoldBT";
    font-size: 20px;
    transition: opacity 0.15s ease 0s;
    border: none;
    &:hover{
        background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/icon_mana_hoverselected-4b4e72e3465b332fb2535f178dac9db4f5a279dc6432c57bb309c2bd63229e4ef7fea8be1a8b1463410983c2316ae33f95a91a75d2407a6952551bb3c17b1478.png) center,
      url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/icon_mana-25ac7617a8c7f5f992660316dd307cf16b36001d1fa9693a5aca46eb01db420041018a1bbed19055f963b2421b7f615b887e84e1508be42c7b74138ee4794829.png) ;
    }
  }
`;
