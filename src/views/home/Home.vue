<template>
  <div class="mb-4">
    <RouterLink :to="$routeNames.contacts">
      <el-button :type="$elComponentType.primary" plain>
        Contacts
      </el-button>
    </RouterLink>
  </div>

  <div class="flex flex-col gap-4 items-center">
    <div
      v-for="item in 3" :key="item"
      class="flex justify-center items-center w-[400px] h-[300px] bg-slate-300 mb-3"
    >
      Scroll down
    </div>

    <div v-for="(img, i) in images" :key="i" class="w-[400px] h-[300px] bg-slate-300 mb-3">
      <LazyImg
        :src="img"
        alt="image"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  '',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  '',
  'https://thumbs.dreamstime.com/b/beautiful-rain-for…-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://thumbs.dreamstime.com/z/sunflower-field-su…lower-field-sunset-beautiful-nature-121481703.jpg',
  'https://thumbs.dreamstime.com/b/amazing-nature-lan…background-amazing-nature-landscape-147189513.jpg',
  '',
  'https://images.pexels.com/photos/6015987/pexels-photo-6015987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ''
]
</script>
