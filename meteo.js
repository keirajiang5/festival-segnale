async function caricaMeteoTorino() {
  const contenitore = document.getElementById('meteo-contenitore');
  const parametri = new URLSearchParams({
    latitude: '45.0703',
    longitude: '7.6869',
    current: 'temperature_2m,wind_speed_10m',
    timezone: 'Europe/Rome'
  });
  const url = `https://api.open-meteo.com/v1/forecast?${parametri}`;

  try {
    const risposta = await fetch(url);
    if (!risposta.ok) {
      throw new Error(`Errore HTTP: ${risposta.status}`);
    }

    const dati = await risposta.json();
    const corrente = dati.current;
    const unita = dati.current_units;
    const oraRilevazione = corrente.time.split('T')[1];

    contenitore.innerHTML = `
      <ul class="meteo-dati">
        <li>
          <span class="meteo-etichetta">Temperatura</span>
          <span class="meteo-valore">${corrente.temperature_2m} ${unita.temperature_2m}</span>
        </li>
        <li>
          <span class="meteo-etichetta">Vento</span>
          <span class="meteo-valore">${corrente.wind_speed_10m} ${unita.wind_speed_10m}</span>
        </li>
        <li>
          <span class="meteo-etichetta">Ora del dato</span>
          <span class="meteo-valore">${oraRilevazione}</span>
        </li>
      </ul>
    `;
  } catch (errore) {
    contenitore.innerHTML = '<p>Impossibile caricare il meteo attuale. Puoi comunque consultare normalmente tutte le altre informazioni sul festival.</p>';
  }
}