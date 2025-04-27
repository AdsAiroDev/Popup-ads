(function() {
  // Check if popup already created
  if (window.adsairoPopupCreated) return;
  window.adsairoPopupCreated = true;

  // Create popup HTML
  var popup = document.createElement('div');
  popup.id = 'adsairo-popup';
  popup.innerHTML = `
    <div id="adsairo-popup-content">
      <div id="adsairo-popup-header">
        <span id="adsairo-ad-label">Ad</span>
        <div title="Ad Info" style="width:22px; height:22px; display:flex; align-items:center; justify-content:center; background:#ffffff; border-radius:4px; box-shadow: 0 1px 2px rgba(0,0,0,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12">
            <path fill="#1a73e8" d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"/>
          </svg>
        </div>
      </div>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0FATIiw03XA8Obq3ccIlyxkobOC7QgOE2tXuShxRVd5XsL-kYDWSB-a826wQEB1NPHMZI0Wrd_NISwTPkKWjCYbswMTn8Gi5EuriNaFeHtXEb3ST3XTxeQF9y7CiNQM4UXn-hhqywM6G7yWVnQcwojg0lLM3fI2IcquhuMHTniSGuROrWo4QeSPeZwNX5/s1600/2-ezgif.com-png-to-webp-converter.webp" alt="Ad Image" id="adsairo-popup-image">
      <h2 id="adsairo-popup-title">Monetize your Content with exclusive ads</h2>
      <p id="adsairo-popup-description">Earn money from your blog or site by showing our exclusive ads. Easy setup, instant approval.</p>
      <div id="adsairo-popup-buttons">
        <button id="adsairo-open-button">Open Ad</button>
        <button id="adsairo-close-button">Close</button>
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popup);

  // Styles
  var style = document.createElement('style');
  style.innerHTML = `
    #adsairo-popup {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 400px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 9999;
      padding: 20px;
      font-family: Arial, sans-serif;
      animation: fadeIn 0.3s;
    }
    #adsairo-popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    #adsairo-ad-label {
      font-size: 14px;
      font-weight: bold;
      color: #555;
    }
    #adsairo-popup-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    #adsairo-popup-title {
      font-size: 18px;
      margin: 10px 0 5px;
      color: #333;
      text-align: center;
    }
    #adsairo-popup-description {
      font-size: 14px;
      color: #666;
      text-align: center;
      margin-bottom: 20px;
    }
    #adsairo-popup-buttons {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    #adsairo-open-button, #adsairo-close-button {
      padding: 10px 20px;
      font-size: 14px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px;
    }
    #adsairo-open-button {
      background-color: #4CAF50;
      color: white;
    }
    #adsairo-close-button {
      background-color: #f44336;
      color: white;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9) translate(-50%, -50%); }
      to { opacity: 1; transform: scale(1) translate(-50%, -50%); }
    }
    @media (max-width: 480px) {
      #adsairo-popup {
        width: 95%;
        padding: 15px;
      }
      #adsairo-popup-title {
        font-size: 16px;
      }
      #adsairo-popup-description {
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(style);

  // Show popup function
  function showPopup() {
    popup.style.display = 'block';
  }

  // Hide popup function
  function hidePopup() {
    popup.style.display = 'none';
  }

  // Button events
  document.getElementById('adsairo-close-button').onclick = function() {
    hidePopup();
    setTimeout(showPopup, 40000); // Reopen after 40 seconds
  };
  document.getElementById('adsairo-open-button').onclick = function() {
    window.open('https://www.adsairo.com/', '_blank');
  };

  // First click anywhere
  var firstClick = false;
  document.addEventListener('click', function() {
    if (!firstClick) {
      showPopup();
      firstClick = true;
    }
  }, { once: true });

})();
