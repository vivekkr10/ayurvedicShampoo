
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Zoom } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import {
  Star,
  ShieldCheck,
  Leaf,
  Truck,
  ShoppingBag,
  Zap,
  CheckCircle2,
  Circle,
  Search,
  Beaker,
} from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";

// --------------------------------------------------
// PRODUCT DATA TYPES
// --------------------------------------------------

interface ProductImage {
  id: number;
  url: string;
  alt: string;
  label: string;
}

interface ProductVariant {
  id: string;
  volume: string;
  price: number;
  originalPrice?: number;
  description: string;
  badge?: string;
}

interface DeliveryOption {
  id: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  popular?: boolean;
}

// --------------------------------------------------
// SAMPLE PRODUCT DATA
// Replace this object with your API response later.
// --------------------------------------------------

const product = {
  id: "BK-001",

  brand: "BK AYURVEDA PHARMACY",

  name: "Bhringraj Scalp Cleanser & Follicle Clarifier",

  description:
    "Pure Hibiscus, Shikakai & Reetha infusion in heavy amber glass with precision brass-tone apothecary pump.",

  rating: 4.8,

  reviewCount: 1420,

  images: [
    {
      id: 1,
      url: "https://res.cloudinary.com/drq2a0262/image/upload/v1794215102/img1_xco4cp.png",
      alt: "18 Jadi Buti Hair Oil",
      label: "Bottled Elixir",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/drq2a0262/image/upload/v1794215099/img2_hyrgmf.png",
      alt: "Pure Saponin Foam",
      label: "Pure Saponin Foam",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/drq2a0262/image/upload/v1794215099/img4_ktoykw.png",
      alt: "Natural herbs",
      label: "Herb Harvest",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/drq2a0262/image/upload/v1794215099/img3_p4hu56.png",
      alt: "Amber glass bottle",
      label: "Amber Glass Vessel",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/drq2a0262/image/upload/v1794215099/img2_hyrgmf.png",
      alt: "Pure Saponin Foam",
      label: "Pure Saponin Foam",
    },
  ] as ProductImage[],

  variants: [
    {
      id: "200ml",
      volume: "200 ml",
      price: 799,
      originalPrice: 950,
      description: "Standard Ritual Pump",
    },
    {
      id: "400ml",
      volume: "400 ml",
      price: 1450,
      description: "Duo Apothecary Pack",
      badge: "REFILL PACK",
    },
  ] as ProductVariant[],

  deliveryOptions: [
    {
      id: "one-time",
      title: "One-Time Sanctum Offering",
      description: "Single shipment from Faridabad apothecary",
      price: 0,
    },
    {
      id: "subscription",
      title: "Auto-Replenish Ritual",
      description:
        "Dispatched every 45 days. Cancel or pause anytime with 1-click.",
      price: 15,
      discount: 15,
      popular: true,
    },
  ] as DeliveryOption[],
};

// --------------------------------------------------
// PRODUCT BENEFITS
// --------------------------------------------------

const benefits = [
  {
    icon: Leaf,
    title: "PH BALANCED 5.5",
    description: "Preserves natural sebum",
  },
  {
    icon: Beaker,
    title: "ZERO MINERAL OIL",
    description: "No petrochemicals",
  },
  {
    icon: ShieldCheck,
    title: "CLASSICAL STHAPANA",
    description: "As per Charaka Samhita",
  },
];

// --------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------

const ProductDetail = () => {
  // Swiper states
  const [thumbsSwiper, setThumbsSwiper] =
    useState<SwiperType | null>(null);

  const [mainSwiper, setMainSwiper] =
    useState<SwiperType | null>(null);

  // Product selection states
  const [selectedVariant, setSelectedVariant] =
    useState(product.variants[0].id);

  const [selectedDelivery, setSelectedDelivery] =
    useState(product.deliveryOptions[0].id);

  // Pincode state
  const [pincode, setPincode] = useState("");

  const [pincodeMessage, setPincodeMessage] =
    useState("");

  // --------------------------------------------------
  // PRICE CALCULATION
  // --------------------------------------------------

  const variant = product.variants.find(
    (item) => item.id === selectedVariant
  )!;

  const delivery = product.deliveryOptions.find(
    (item) => item.id === selectedDelivery
  )!;

  const discountPercent = delivery.discount ?? 0;

  const finalPrice = Math.round(
    variant.price * (1 - discountPercent / 100)
  );

  const originalPrice = variant.originalPrice;

  // --------------------------------------------------
  // HANDLERS
  // --------------------------------------------------

  const handleAddToCart = () => {
    console.log("Add to cart:", {
      productId: product.id,
      variantId: selectedVariant,
      deliveryId: selectedDelivery,
      price: finalPrice,
    });

    // Connect your add-to-cart API here.
  };

  const handleBuyNow = () => {
    console.log("Buy now:", {
      productId: product.id,
      variantId: selectedVariant,
      deliveryId: selectedDelivery,
      price: finalPrice,
    });

    // Connect checkout navigation here.
  };

  const handleVerifyPincode = () => {
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeMessage("Please enter a valid 6-digit pincode.");
      return;
    }

    setPincodeMessage(
      "Pincode entered. Connect your delivery API to check availability."
    );

    // Connect your delivery availability API here.
  };

  // --------------------------------------------------
  // JSX
  // --------------------------------------------------

  return (
    <section className="w-full bg-[#faf8f3] py-8 sm:py-10 lg:py-12">

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:gap-10 xl:gap-14 xl:px-10">

        {/* ==========================================
            LEFT SIDE - PRODUCT GALLERY
        ========================================== */}

        <div className="min-w-0">

          {/* MAIN IMAGE */}
          <div className="group relative overflow-hidden rounded-lg bg-[#09251b] p-2.5 shadow-md sm:p-3">

            <Swiper
              modules={[Thumbs, Zoom]}
              onSwiper={setMainSwiper}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed
                    ? thumbsSwiper
                    : null,
              }}
              zoom={{
                maxRatio: 2.5,
              }}
              spaceBetween={10}
              className="product-main-swiper"
            >

              {product.images.map((image) => (
                <SwiperSlide key={image.id}>

                  <div className="swiper-zoom-container">

                    <img
                      src={image.url}
                      alt={image.alt}
                      className="h-[320px] w-full object-contain sm:h-[420px] lg:h-[460px] xl:h-[500px]"
                    />

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

            {/* PRODUCT IMAGE BADGES */}

            <div className="pointer-events-none absolute left-5 top-5 z-10 flex flex-col gap-1.5">

              <span className="flex items-center gap-1.5 rounded-sm bg-[#faf8f3] px-2.5 py-1 text-[9px] font-bold tracking-wide text-[#17271d] sm:text-[10px]">
                <ShieldCheck size={12} />
                COLD-INFUSED KALKA
              </span>

              <span className="rounded-sm bg-[#eacb48] px-2.5 py-1 text-[9px] font-bold tracking-wide text-[#29250d] sm:text-[10px]">
                ZERO SULFATES • ZERO SILICONES
              </span>

            </div>

            {/* ZOOM BUTTON */}

            <button
              type="button"
              onClick={() => mainSwiper?.zoom.toggle()}
              aria-label="Zoom product image"
              className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#09251b] shadow-md transition hover:bg-white"
            >
              <Search size={19} />
            </button>

          </div>

          {/* THUMBNAIL SLIDER */}

          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            freeMode
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 3.5,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="product-thumbs-swiper mt-3"
          >

            {product.images.map((image) => (

              <SwiperSlide key={image.id}>

                <div className="overflow-hidden rounded-md border border-transparent bg-[#e9e5dc] transition">

                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-[85px] w-full cursor-pointer object-cover sm:h-[110px]"
                  />

                  <p className="truncate bg-[#09251b] px-1 py-1.5 text-center text-[9px] text-white sm:text-[10px]">
                    {image.label}
                  </p>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

          {/* DESCRIPTION BANNER */}

          <div className="mt-7 flex items-center gap-3 rounded-lg bg-[#f0ede6] p-4 sm:gap-4 sm:p-5">

            <Leaf
              size={27}
              className="shrink-0 text-[#8a710d]"
            />

            <div className="min-w-0 flex-1">

              <h3 className="text-sm font-semibold text-[#17271d] sm:text-base">
                100% Ayurvedic Saponins (Keshya Dravyas)
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                Naturally clarifies sebum buildup without
                stripping natural lipids or disturbing the
                scalp's acidic mantle (pH 5.5).
              </p>

            </div>

            <span className="hidden shrink-0 rounded-sm bg-[#e5e0d5] px-3 py-2 text-[9px] font-bold tracking-wide text-[#8a710d] md:block">
              AYUSH LIC. #108-HR
            </span>

          </div>

        </div>


        {/* ==========================================
            RIGHT SIDE - PRODUCT INFORMATION
        ========================================== */}

        <div className="min-w-0">

          {/* BRAND AND RATING */}

          <div className="flex flex-wrap items-center justify-between gap-2">

            <span className="text-[10px] font-bold tracking-widest text-[#8a710d] sm:text-[11px]">
              {product.brand}
            </span>

            <div className="flex items-center gap-1.5 rounded-full bg-[#eeeae3] px-3 py-1.5 text-[10px] text-gray-600">

              <Star
                size={12}
                fill="#92770d"
                className="text-[#92770d]"
              />

              <span className="font-bold text-gray-800">
                {product.rating}
              </span>

              <span>
                ({product.reviewCount.toLocaleString("en-IN")} Sanctum Reviews)
              </span>

            </div>

          </div>


          {/* PRODUCT TITLE */}

          <h1 className="mt-3 font-serif text-[28px] leading-tight text-[#15241c] sm:text-3xl lg:text-[36px]">
            {product.name}
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>


          {/* PRICE SECTION */}

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-[#f0ede8] px-4 py-4 sm:px-5 sm:py-5">

            <span className="font-serif text-4xl font-semibold text-[#14231b] sm:text-[42px]">
              ₹{finalPrice.toLocaleString("en-IN")}
            </span>

            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{originalPrice.toLocaleString("en-IN")}
              </span>
            )}

            {originalPrice && (
              <span className="rounded-sm bg-[#92770d] px-2 py-1 text-[9px] font-bold text-white">
                SAVE {Math.round(
                  ((originalPrice - variant.price) /
                    originalPrice) * 100
                )}%
              </span>
            )}

            <span className="ml-auto text-[9px] text-gray-600">
              Inclusive of all taxes
            </span>

          </div>


          {/* PRODUCT VARIANTS */}

          <div className="mt-5">

            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">

              <h3 className="text-[10px] font-bold tracking-wider text-gray-700">
                SELECT RITUAL VOLUME
              </h3>

              <span className="text-[10px] font-medium text-[#92770d]">
                Usage: ~45 days on alternate days
              </span>

            </div>

            <div className="grid grid-cols-2 gap-2">

              {product.variants.map((item) => {

                const active = selectedVariant === item.id;

                return (

                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setSelectedVariant(item.id)}
                    className={`relative min-w-0 rounded-md border p-3 text-left transition-all duration-200 ${
                      active
                        ? "border-[#09251b] bg-[#09251b] text-white"
                        : "border-transparent bg-[#eae7e0] text-gray-800 hover:border-gray-300"
                    }`}
                  >

                    {item.badge && (
                      <span className={`absolute right-2 top-1.5 text-[8px] font-bold tracking-wide ${
                        active ? "text-[#e5cb66]" : "text-[#92770d]"
                      }`}>
                        {item.badge}
                      </span>
                    )}

                    <div className="flex items-center justify-between gap-1">

                      <span className="text-base font-bold sm:text-lg">
                        {item.volume}
                      </span>

                      {active && (
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-[#e5cb66]"
                        />
                      )}

                    </div>

                    <p className={`mt-1 text-[9px] sm:text-[10px] ${
                      active ? "text-gray-300" : "text-gray-500"
                    }`}>
                      {item.description} • ₹
                      {item.price.toLocaleString("en-IN")}
                    </p>

                  </button>

                );

              })}

            </div>

          </div>


          {/* DELIVERY CADENCE */}

          <div className="mt-5">

            <h3 className="mb-2 text-[10px] font-bold tracking-wider text-gray-700">
              DELIVERY CADENCE
            </h3>

            <div className="space-y-2">

              {product.deliveryOptions.map((option) => {

                const active = selectedDelivery === option.id;

                const optionPrice = Math.round(
                  variant.price * (1 - (option.discount ?? 0) / 100)
                );

                return (

                  <button
                    type="button"
                    key={option.id}
                    onClick={() => setSelectedDelivery(option.id)}
                    className={`relative flex w-full items-center gap-2.5 rounded-md border p-3 text-left transition-all ${
                      active
                        ? "border-[#d9d0b9] bg-white"
                        : "border-transparent bg-white hover:border-gray-300"
                    }`}
                  >

                    {active ? (
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#92770d]"
                      />
                    ) : (
                      <Circle
                        size={17}
                        className="shrink-0 text-gray-400"
                      />
                    )}

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="text-xs font-medium text-gray-800 sm:text-sm">
                          {option.title}
                        </span>

                        {option.discount && (
                          <span className="bg-[#e9ca46] px-1.5 py-0.5 text-[8px] font-bold text-[#3b3100]">
                            SAVE EXTRA {option.discount}%
                          </span>
                        )}

                      </div>

                      <p className="mt-1 text-[9px] leading-relaxed text-gray-500 sm:text-[10px]">
                        {option.description}
                      </p>

                    </div>

                    <span className="shrink-0 text-sm font-bold text-[#17271d]">
                      ₹{optionPrice.toLocaleString("en-IN")}
                    </span>

                    {option.popular && (
                      <span className="absolute -right-1 -top-1 rounded-bl-md bg-[#92770d] px-2 py-1 text-[8px] font-bold text-white">
                        POPULAR
                      </span>
                    )}

                  </button>

                );

              })}

            </div>

          </div>


          {/* ACTION BUTTONS */}

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex min-h-[54px] items-center justify-center gap-2 rounded-md bg-[#09251b] px-3 text-xs font-bold tracking-wide text-[#e7d27a] transition hover:bg-[#153d2e] active:scale-[0.98]"
            >
              <ShoppingBag size={17} />
              ADD TO SACRED BAG
            </button>

            <button
              type="button"
              onClick={handleBuyNow}
              className="flex min-h-[54px] items-center justify-center gap-2 rounded-md bg-[#806600] px-3 text-xs font-bold tracking-wide text-white transition hover:bg-[#695400] active:scale-[0.98]"
            >
              <Zap size={17} />
              1-CLICK UPI / COD
            </button>

          </div>


          {/* DELIVERY CHECK */}

          <div className="mt-5 rounded-md bg-[#f1eee8] p-3 sm:p-4">

            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">

              <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-700 sm:text-[11px]">
                <Truck size={14} />
                Check Vatika Express Delivery
              </span>

              <span className="text-[9px] font-medium text-[#92770d]">
                Free Shipping on All Pre-Paid Orders
              </span>

            </div>

            <div className="flex gap-2">

              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter 6-Digit Delivery Pincode"
                value={pincode}
                onChange={(e) => {
                  setPincode(
                    e.target.value.replace(/\D/g, "")
                  );

                  setPincodeMessage("");
                }}
                className="min-w-0 flex-1 rounded-sm border border-gray-200 bg-white px-3 py-2.5 text-xs outline-none transition focus:border-[#92770d]"
              />

              <button
                type="button"
                onClick={handleVerifyPincode}
                disabled={!/^\d{6}$/.test(pincode)}
                className="rounded-sm bg-[#e4e1d9] px-4 text-[10px] font-bold text-gray-700 transition hover:bg-[#d6d2c8] disabled:cursor-not-allowed disabled:opacity-50"
              >
                VERIFY
              </button>

            </div>

            {pincodeMessage && (
              <p className="mt-2 text-[10px] text-gray-600">
                {pincodeMessage}
              </p>
            )}

            <p className="mt-2 text-[10px] text-gray-600">
              Estimated delivery within{" "}
              <strong className="text-gray-800">
                48 Hours
              </strong>{" "}
              from Faridabad Hub.
            </p>

          </div>


          {/* PRODUCT BENEFITS */}

          <div className="mt-4 grid grid-cols-3 gap-2">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (

                <div
                  key={benefit.title}
                  className="flex min-w-0 flex-col items-center justify-center rounded-md bg-[#f2efe9] px-2 py-4 text-center"
                >

                  <Icon
                    size={20}
                    strokeWidth={1.7}
                    className="text-[#92770d]"
                  />

                  <h4 className="mt-2 text-[8px] font-bold tracking-wide text-gray-800 sm:text-[9px]">
                    {benefit.title}
                  </h4>

                  <p className="mt-1 text-[8px] leading-relaxed text-gray-500 sm:text-[9px]">
                    {benefit.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>


    </section>
  );
};

export default ProductDetail;
