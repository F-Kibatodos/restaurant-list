# 餐廳收藏清單

展示蒐藏的餐廳，點進去可以查看各餐廳的詳細資訊

## 開發環境

- Node 10.15.0
- Express 4.17.1
- Express-handlebars 3.1.0

### 安裝

首先在終端機(Termianl)輸入

```
cd 資料夾名稱      //移動到指定資料夾
```

或輸入

```
mkdir 資料夾名稱   //創建新資料夾
```

並在此資料夾中依序輸入

```
git clone https://github.com/F-Kibatodos/restaurant-list.git       //將此專案下載到資料夾
cd restaurant-list                                                 //移動到專案資料夾
npm install                                                        //下載相關npm套件
npm run dev                                                        //執行專案
```

接著就可以在網頁輸入http://localhost:3000見到頁面

### 功能說明

| 功能                        | 網址                                             |
| --------------------------- | ------------------------------------------------ |
| 首頁:顯示餐廳清單及簡單資訊 | http://localhost:300                             |
| 點選餐廳顯示詳細內容及介紹  | http://localhost:300/restaurants/id              |
| 可搜尋餐廳                  | http://localhost:300/search?keyword=搜尋輸入內容 |

### 截圖

首頁：  
![首頁](https://i.imgur.com/Two1Jh2.png)  
餐廳資訊：  
![內頁](https://i.imgur.com/uwMcfp7.png)  
搜尋結果：  
![搜尋](https://i.imgur.com/V7knZmD.png)

### 作者

[F-Kibatodos](https://github.com/F-Kibatodos)
