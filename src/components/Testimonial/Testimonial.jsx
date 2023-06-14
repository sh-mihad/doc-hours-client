import React from "react";

const Testimonial = () => {
  return (
    <section class="bg-accent dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span class="text-white text-2xl font-bold">clients</span>{" "}
          say
        </h1>

        <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 text-white">
          <div class="p-8 border rounded-lg dark:border-gray-700">
            <p class="leading-loose     ">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div class="flex items-center mt-8 -mx-2">
              <img
                class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mx-2 ">
                <h1 class="font-semibold">Robert</h1>
                <span class="text-sm ">CTO, Robert Consultency</span>
              </div>
            </div>
          </div>

          <div class="p-8 border rounded-lg dark:border-gray-700">
            <p class="leading-loose     ">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div class="flex items-center mt-8 -mx-2">
              <img
                class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div class="mx-2">
                <h1 class="font-semibold ">Jeny Doe</h1>
                <span class="text-sm ">CEO, Jeny Consultency</span>
              </div>
            </div>
          </div>

          <div class="p-8 border rounded-lg dark:border-gray-700">
            <p class="leading-loose     ">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div class="flex items-center mt-8 -mx-2">
              <img
                class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="mx-2">
                <h1 class="font-semibold">Ema Watson </h1>
                <span class="text-sm ">Marketing Manager at Stech</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
