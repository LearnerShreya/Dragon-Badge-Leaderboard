function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();

  // Sort by Rank (3rd column)
  data.sort((a, b) => a[2] - b[2]);

  // Fixed banner URL
  const bannerURL = "https://drive.google.com/uc?export=view&id=15O21OCfa534krkz-y2PRBUH1DGeUiT8c";

  let html = `
  <html>
    <head>
      <title>Squad Stars Leaderboard</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: #f9fafc;
          color: #333;
          padding: 30px;
        }
        .banner {
          text-align: center;
          margin-bottom: 30px;
        }
        .banner img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        h1 {
          text-align: center;
          color: #d32f2f;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          max-width: 800px;
          margin: auto;
          border-collapse: collapse;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          background: white;
        }
        th, td {
          padding: 12px 16px;
          border: 1px solid #ddd;
          text-align: center;
        }
        th {
          background-color: #f44336;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        tr:hover {
          background-color: #ffe0b2;
        }
        @media (max-width: 600px) {
          table, thead, tbody, th, td, tr {
            display: block;
          }
          th {
            display: none;
          }
          td {
            border: none;
            padding: 10px;
            text-align: left;
          }
          td:before {
            content: attr(data-label);
            font-weight: bold;
            display: inline-block;
            width: 120px;
          }
        }
      </style>
    </head>
    <body>
      <div class="banner">
        <img src="${bannerURL}" alt="Dragon Challenge Banner" />
      </div>
      <h1>🔥 Squad Stars Leaderboard 🔥</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Badge</th>
            <th>Rank</th>
            <th>Segment</th>
          </tr>
        </thead>
        <tbody>`;

  data.forEach(row => {
    const [name, badge, rank, segment] = row;
    html += `
          <tr>
            <td>${name}</td>
            <td>${badge}</td>
            <td>${rank}</td>
            <td>${segment}</td>
          </tr>`;
  });

  html += `
        </tbody>
      </table>
    </body>
  </html>`;

  return HtmlService.createHtmlOutput(html)
    .setTitle("Leaderboard")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
