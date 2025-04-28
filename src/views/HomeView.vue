<script setup lang="ts">
  import { ref, onMounted } from 'vue'
 
 interface Event {
   id: number
   name: string
   place: string
   time: string
 }
 
 const events = ref<Event[]>([])
 
 const fetchEvents = async () => {
   const response = await fetch('/api/makanan')
   const data = await response.json()
   events.value = data
 }
 
 onMounted(() => {
   fetchEvents()
 })
 
</script>

<template>
  <main>
    <div>Daftar Event</div>
 
 <div>
   <ul>
     <li v-for="event in events" :key="event.id">
       <div>{{ event.name }}</div>
       <div>{{ event.place }}</div>
       <div>{{ event.time }}</div>
     </li>
   </ul>
 </div>
  </main>
</template>
