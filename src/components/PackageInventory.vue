<template>
  <section class="flex flex-col">
    <div class="section_title-wrapper">
      <h1 class="section_title">package inventory</h1>
      <button class="section_view-button">view plan</button>
    </div>
    <div class="flex flex-col gap-4 w-full flex-1">
      <div class="flex gap-4 w-full h-full">
        <article class="package-inventory">
          <h3 class="package-inventory_title">day</h3>
          <div class="flex items-center">
            <svg class="mr-2" height="32" width="32" view-box="0 0 32 32">
              <circle r="16" cx="16" cy="16" class="fill-neutral-light-40"></circle>
              <circle
                r="8"
                cx="16"
                cy="16"
                string="tamato"
                stroke-width="16"
                stroke-dasharray="calc(50 * 100.53 / 200) 100.53"
                transform="rotate(-90) translate(-32)"
                class="stroke-main-interactive"
              ></circle>
              <circle r="13" cx="16" cy="16" class="fill-background"></circle>

              <text
                x="50%"
                y="55%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="16"
                class="package-inventory_quntity"
              >
                2
              </text>
            </svg>
            <p class="package-inventory_unit">inventory</p>
          </div>
        </article>
        <article class="package-inventory border-success-main">
          <h3 class="package-inventory_title">conferance</h3>
          <div class="flex items-center">
            <svg class="mr-2" height="32" width="32" view-box="0 0 32 32">
              <circle r="16" cx="16" cy="16" class="fill-neutral-light-40"></circle>
              <circle
                r="8"
                cx="16"
                cy="16"
                string="tamato"
                stroke-width="16"
                stroke-dasharray="calc(100 * 100.53 / 200) 100.53"
                transform="rotate(-90) translate(-32)"
                class="stroke-[#0447ac]"
              ></circle>
              <circle r="13" cx="16" cy="16" class="fill-background"></circle>

              <text
                x="50%"
                y="55%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="16"
                class="package-inventory_quntity"
              >
                25
              </text>
            </svg>
            <p class="package-inventory_unit">inventory</p>
          </div>
        </article>
      </div>
      <div class="flex gap-4 w-full h-full">
        <article class="package-inventory">
          <h3 class="package-inventory_title">day</h3>
          <div class="flex items-center">
            <svg class="mr-2" height="32" width="32" view-box="0 0 32 32">
              <circle r="16" cx="16" cy="16" class="fill-neutral-light-40"></circle>
              <circle
                r="8"
                cx="16"
                cy="16"
                string="tamato"
                stroke-width="16"
                stroke-dasharray="calc((1 / 3 * 100) * 100.53 / 200) 100.53"
                transform="rotate(-90) translate(-32)"
                class="stroke-[#95ac38]"
              ></circle>
              <circle r="13" cx="16" cy="16" class="fill-background"></circle>

              <text
                x="50%"
                y="55%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="16"
                class="package-inventory_quntity"
              >
                5
              </text>
            </svg>
            <p class="package-inventory_unit">inventory</p>
          </div>
        </article>
        <article class="package-inventory">
          <h3 class="package-inventory_title">conferance</h3>
          <div class="flex items-center">
            <svg class="mr-2" height="32" width="32" view-box="0 0 32 32">
              <circle r="16" cx="16" cy="16" class="fill-neutral-light-40"></circle>
              <circle
                r="8"
                cx="16"
                cy="16"
                string="tamato"
                stroke-width="16"
                stroke-dasharray="calc(75 * 100.53 / 200) 100.53"
                transform="rotate(-90) translate(-32)"
                class="stroke-main-secondary"
              ></circle>
              <circle r="13" cx="16" cy="16" class="fill-background"></circle>

              <text
                x="50%"
                y="55%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="16"
                class="package-inventory_quntity"
              >
                15
              </text>
            </svg>
            <p class="package-inventory_unit">inventory</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
