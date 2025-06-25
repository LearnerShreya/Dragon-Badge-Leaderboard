
# Dragon Badge Leaderboard

**Dragon Badge Leaderboard** is a real-time web app built using Google Apps Script that visually showcases participant names, badges, and ranks from a Google Sheet in a leaderboard format.

Ideal for student clubs, coding squads, competitions, and internal team challenges.

---

## Features

* Live data directly from a Google Sheet
* Automatically sorted based on rank
* Hosted using Google Apps Script (completely free)
* Custom banner support (Google Drive image)
* Fully responsive and mobile-friendly design

---

## Google Sheet Format

Ensure your Google Sheet (named **Sheet1**) follows this format from row 2 onward:

| Name   | Badge  | Rank | Segment |
| ------ | ------ | ---- | ------- |
| Himani | Dragon | 1    | Phoenix |
| Riya   | Ember  | 2    | Hydra   |

* **Name** – Participant’s full name
* **Badge** – Badge or award title
* **Rank** – Numeric value; lower is better
* **Segment** – Team, house, or group name

---

## Setup Instructions

1. Open your Google Sheet
2. Go to `Extensions > Apps Script`
3. Delete the default code and paste the provided script
4. Click **Deploy > Manage deployments > New deployment**

   * Select **"Web app"**
   * Set **Access** to "Anyone"
   * Set **Execute as** to "Me"
5. Click **Deploy**, then **Copy the Web App URL**
6. Open the link in your browser to view the leaderboard

---

## Optional: Add a Custom Banner

1. Upload a banner image to Google Drive
2. Right-click and get the **File ID**
3. Replace the banner URL in the script:

   ```javascript
   const bannerURL = "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID";
   ```

---

## File Structure

```
Dragon-Badge-Leaderboard/
├── README.md
└── Code.gs (Google Apps Script file)
```

