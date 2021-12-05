# NhacCuaTui API Full

NhacCuaTui API Library with Typescript support
Support Nodejs server, client request (with proxy built in)

## Original Library

👉 [nhaccuatui-api](https://www.npmjs.com/package/nhaccuatui-api) 👈  
Respect a lot ❤️ 🙏

## Installation

```
npm i nhaccuatui-api-full
```

Common JS

```javascript
const NhacCuaTui = require("nhaccuatui-api-full");

// or

const {
  getHome,
  getSong,
  getPlaylists,
  //... and many other services
} = require("nhaccuatui-api-full");
```

ES Import

```javascript
import {
  getHome,
  getSong,
  getPlaylists,
  //... and many other services
} from "nhaccuatui-api-full";
```

> To use this library with **Vite** remember to add this plugin [@originjs/vite-plugin-commonjs](https://www.npmjs.com/package/@originjs/vite-plugin-commonjs)

## Usage

### Get Data

```javascript
// .then
getHome().then((data) => console.log(data));
// or
NhacCuaTui.getHome().then((data) => console.log(data));

// async - await
(async () => {
  const data = await getHome();
  // or
  const data = await NhacCuaTui.getHome();
})();
```

### 1. Get Home

Get the data display on the homepage (Include song, artist, playlists, trending, ...)

```javascript
getHome();
```

### 2. Get Song

Get the song detail  
Example Link: [https://beta.nhaccuatui.com/bai-hat/buoc-qua-nhau-vu.EdENCgJm9dAa.html](https://beta.nhaccuatui.com/bai-hat/buoc-qua-nhau-vu.EdENCgJm9dAa.html)  
Then the ID is: EdENCgJm9dAa

```javascript
getSong("SONG_ID");
```

### 3. Get Playlists

Get the list of popular playlists

```javascript
getPlaylists();
```

### 4. Get Playlist Detail

Get the playlist detail  
Example Link: [https://beta.nhaccuatui.com/playlist/nhac-viet-hot-thang-12-va.7ROXQyroRFYT.html](https://beta.nhaccuatui.com/playlist/nhac-viet-hot-thang-12-va.7ROXQyroRFYT.html)  
Then the ID is: 7ROXQyroRFYT

```javascript
getPlaylistDetail("PLAYLIST_ID");
```

### 5. Get Lyric

Get the lyric in text and LRC file

```javascript
getLyric("SONG_ID");
```

### 6. Get Topics

Get popular topics

```javascript
getTopics();
```

### 7. Get Topic Detail

Get the topic detail  
Example Link: [https://beta.nhaccuatui.com/chu-de/hot-v-pop.weiwjycnu.html](https://beta.nhaccuatui.com/chu-de/hot-v-pop.weiwjycnu.html)  
Then the ID is: weiwjycnu

```javascript
getTopicDetail("TOPIC_ID");
```

### 8. Get Chart

Get Top Songs

Parameters

- Category (Optional). Default: "nhac-viet"
- Time (Optional)
  - Week: number
  - Year: number

```javascript
getChart({
  "nhac-viet", // category
  {
    week: 48,
    year: 2021
  }
})
```

### 9. Get Top 100

Get the top 100 song of the playlist

Example Link: [https://beta.nhaccuatui.com/top100/top-100-nhac-tre.m3liaiy6vVsF.html](https://beta.nhaccuatui.com/top100/top-100-nhac-tre.m3liaiy6vVsF.html)
So the ID is: m3liaiy6vVsF

```javascript
getTop100("TOP_100_ID");
```

### 10. Search by Keyword

Search songs, playlists, artists,... by keyword

```javascript
searchByKeyword("SEARCH_KEYWORD");
```

### 11. Get Top Keywords

Get top searched keywords

```javascript
getTopKeyword();
```

### 12. Get trending artists

Get top 10 artists

```javascript
getTrendingArtists();
```

### 13. Explore artists

Parameters

- nation (Optional) - Default: "hot"
- gender (Optional) - Default: 1 (men)

```javascript
exploreArtists({
  "hot", // nation
  1 // gender
});
```

### 14. Explore (Song, Playlist, MV)

Parameters

- type (Required) - "song" || "playlist" || "mv"
- key (Optional) - Default: "moi-hot"
- page (Optional) - Default: 1
- pageSize (Optional) - Default: 36

```javascript
explore({
  type: "song",
  key: "moi-hot",
  page: 1,
  pageSize: 36,
});
```

## Summary

🤩✨ If you enjoy using this library, give me a star on Github and share it to your friends. ✨🤩
