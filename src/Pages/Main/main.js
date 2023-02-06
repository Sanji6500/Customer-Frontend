import React from "react";
import { useState } from "react";
import { useMain } from "../../Api/useMain";

import { ProductCard, SliderProductCard } from "../../Elements/Cards";
import { Productslider } from "../../Elements/Productslider";
import { DataUpcoming } from "../../FakeData/Data";
import { useGetWidth } from "../../Hocks/useGetWidth";
import ProductsBrowser from "../ProductsBrowser/ProductsBrowser";

const Main = () => {
  const [showPopupProductsBrowser, setShowPopupProductsBrowser] =
    useState(false);
  const width = useGetWidth();
  const { loadingCurrentAds, dataCurrentAds } = useMain();
  const result = !loadingCurrentAds ? dataCurrentAds : [];

  const [getdataFromProductCard, setgetdataFromProductCard] = useState(null);

  return (
    <React.Fragment>
      <ProductsBrowser
        Trigger={showPopupProductsBrowser}
        setclose={setShowPopupProductsBrowser}
        data={getdataFromProductCard}
      />

      <div className=" flex  flex-col   ease-in-out duration-300    w-full  p-2 ">
        <div className="  flex  flex-wrap    ">
          {result.map((Data, index) => {
            if (
              (width > 1024 && index === 4) ||
              (width > 860 && width <= 1024 && index === 3) ||
              (width > 640 && width <= 860 && index === 3) ||
              (width > 0 && width <= 640 && index === 2)
            )
              return (
                <React.Fragment>
                  <ProductCard
                    image={Data?.ProductID?.Photos}
                    SuperMarktName={Data?.Shop_ID?.ShopName}
                    ProductName={Data?.ProductID?.ProductName}
                    Price={Data?.PriceAfterDiscount}
                    PriceBeforDiscount={Data?.PriceBefordiscount}
                    onClick={() => {
                      setShowPopupProductsBrowser(!showPopupProductsBrowser);
                      setgetdataFromProductCard(Data);
                    }}
                  />

                  <Productslider Title="Angebote, die Ihnen gefallen 🧡">
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                    <SliderProductCard />
                  </Productslider>
                </React.Fragment>
              );

            return (
              <ProductCard
                image={Data?.ProductID?.Photos}
                SuperMarktName={Data?.Shop_ID?.ShopName}
                ProductName={Data?.ProductID?.ProductName}
                Price={Data.PriceAfterDiscount}
                PriceBeforDiscount={Data.PriceBefordiscount}
                onClick={() => {
                  setShowPopupProductsBrowser(!showPopupProductsBrowser);
                  setgetdataFromProductCard(Data);
                }}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
