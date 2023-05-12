import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";

import img from "../../../Images/image/call.png";
import veg1 from "../../../Images/Blog/veg1.webp";

const Blog = () => {
  return (
    <div className="mb-20">
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div
          class="hero min-h-screen "
          style={{
            background: `url(${veg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class=" "></div>
          <div
            style={{ marginTop: "-500px" }}
            class="hero-content text-center text-neutral-content"
          >
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold text-white">
                Development Agriculture{" "}
                <span className="text-white">History</span>
              </h1>
              <p class="mb-5 text-white">
                Hi,I'm Tiffany Tofu,Founder and CEO of the Development
                Agriculture.We started our Journey In 2002.from the begining we
                provide Organic fresh vegetable and fruits.we have total 50000
                man power who works hard our organic farm and destribution the
                grocery.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== */}
      <h1 className="text-primary text-center text-3xl font-bold my-12">
        Farming Equipment <span className="text-neutral">Blog</span>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-12 mx-auto">
        <div>
          <div class="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[350px] "
                src="https://vistapointe.net/images/harvester-wallpaper-7.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div className="flex justify-center items-center">
                <FaUserAlt className="text-primary" />{" "}
                <p className="ml-2">Jackson</p>
                <BsFillCalendarDateFill className="text-primary" />{" "}
                <p className="ml-2">May 15, 2021</p>
                <BsFillTagsFill className="text-primary" />{" "}
                <p className="ml-2">Seasonal</p>
              </div>
              <div class="divider"></div>
              <h2 class="card-title text-primary">
                Harvester Tractor benefits
              </h2>
              <p>
                Harvester is a multipurpose farming machine used to obtain crop
                yield by means of threshing, reaping and cleaning the crops in a
                single operation. voluptatum consequatur atque modi corporis,
                obcaecati quae quam corrupti debitis assumenda. Maiores,
                distinctio? Quos velit nemo odit autem.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[350px]"
                src="https://www.europages.co.uk/filestore/opt/product/a1/7e/superdikfreze_urun5-1024-525_e94a1291.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div className="flex justify-center items-center">
                <FaUserAlt className="text-primary" />{" "}
                <p className="ml-2">Niami Nill</p>
                <BsFillCalendarDateFill className="text-primary" />{" "}
                <p className="ml-2">Nov 05, 2021</p>
                <BsFillTagsFill className="text-primary" />{" "}
                <p className="ml-2">Regular</p>
              </div>
              <div class="divider"></div>
              <h2 class="card-title text-primary">
                Benefit of Toscano Agricultural Machinery
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, inventore? Natus cupiditate veniam aut quia.
                Aspernatur, tenetur iste placeat a eaque quia corrupti impedit
                voluptates distinctio, molestiae est aliquam libero odit non
                quis porro? Nesciunt corrupti deleniti quisquam quis amet?Lorem
                ipsum dolor
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[350px]"
                src="https://khetigaadi.com/resize/large/images/new-implement/Fieldking%20Pneumatic%20Planter%20FKPMCP-4%20_0_1577777457.png"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div className="flex justify-center items-center">
                <FaUserAlt className="text-primary" />{" "}
                <p className="ml-2">Jesona Mill</p>
                <BsFillCalendarDateFill className="text-primary" />{" "}
                <p className="ml-2">Oct 22, 2021</p>
                <BsFillTagsFill className="text-primary" />{" "}
                <p className="ml-2">Seasonal</p>
              </div>
              <div class="divider"></div>
              <h2 class="card-title text-primary">
                Simple strategies Fieldking
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati consequuntur atque dicta placeat aliquid. Nemo
                mollitia impedit natus dolorem at repellendus modi ipsa nam,
                quidem facilis voluptate commodi, recusandae voluptatibus
                distinctio deserunt, veritatis ullam voluptatem ratione
                provident voluptas magnam. Quas eligendi quisquam non sequi quia
                eveniet modi ipsa nihil? Accusantium sunt, possimus num.
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary text-white">Read more</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[350px]"
                src="https://img.wallpapic.com/i487-047-341/medium/atv-cars-blue-tractor-wallpaper.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div className="flex justify-center items-center">
                <FaUserAlt className="text-primary" />{" "}
                <p className="ml-2">Hilari Neo</p>
                <BsFillCalendarDateFill className="text-primary" />{" "}
                <p className="ml-2">july 25, 2021</p>
                <BsFillTagsFill className="text-primary" />{" "}
                <p className="ml-2">Regular</p>
              </div>
              <div class="divider"></div>
              <h2 class="card-title text-primary">
                How to select Blue Tractor
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                suscipit mollitia nisi tempore sunt rem earum vero animi cumque
                facilis voluptate, nulla minima eos hic fugit iusto libero cum
                quis vel natus repellat. Eaque suscipit autem, et aliquam
                similique sed dolorum fugiat repudiandae enim illo aut eligendi
                necessitatibus atque deleniti accusamus natus nulla, delectus
                veniam ducimus maxime, provident temporibus soluta.
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary text-white">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== */}
      <div>
        <h1 className="text-primary text-center text-4xl font-bold my-16  shadow-lg pb-3">
          Development Agriculture <span className="text-neutral">Team</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-12 mx-auto">
        <div class="card lg:h-[350px] w-50 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10 ">
            <img
              className="rounded-lg pic-style"
              src="https://freepngimg.com/save/163365-photos-donald-trump-free-download-png-hd/1500x1125"
              alt="Shoes"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary">Tiffany Tofu</h2>
            <p>Founder ,CEO</p>
          </div>
        </div>

        <div class="card lg:h-[350px] w-50 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://pngimg.com/d/face_PNG11760.png"
              alt="Shoes"
              class="rounded-xl pic-style"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary">Sam Miller</h2>
            <p>Quality Control</p>
          </div>
        </div>

        <div class="card lg:h-[350px] w-50 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJydqg-ZQJoukMKjeLm1gpOzADy68SNWk_A&usqp=CAU"
              alt="Shoes"
              class="rounded-xl pic-style"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary">Jessica Sena</h2>
            <p>Customer support</p>
          </div>
        </div>

        <div class="card lg:h-[350px] w-50 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNOIgwJ7stU85IbLrN7Lxr3p7HQ-P9ujtIVSME8ty9UXU_3d6382vSCmZWO2YS1weVCI&usqp=CAU"
              alt="Shoes"
              class="rounded-xl pic-style"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary">Lisy Johnson</h2>
            <p>Human Resource</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
