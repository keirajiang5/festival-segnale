## sessione 1

1. Creazione della scheda dati (dati/SCHEMA.md)
- Definizione delle due entità principali (Evento e Sede) a partire dai file eventi.json e sedi.json.
- Documentazione dettagliata dei campi (nome, tipo, descrizione ed esempio), delle chiavi primarie (id), della relazione uno-a-molti (Evento.sede_id -> Sede.id), delle quantità (6 eventi e 3 sedi), delle modalità di aggiornamento nella repository e del funzionamento della pagina.

2. Modellazione visiva della relazione (Mermaid erDiagram)
- Scrittura del diagramma entità-relazione in formato Mermaid (erDiagram) con la descrizione sintetica del legame tra sedi ed eventi.
- Integrazione diretta del diagramma nella sezione 4 del file dati/SCHEMA.md.

3. Caricamento dinamico del programma (programma.html)
- Rimozione delle sei schede eventi scritte a mano nell'HTML e generazione dinamica tramite fetch da dati/eventi.json e dati/sedi.json, incrociando sede_id per mostrare il nome della sede.
- Conservazione dello stile e della formattazione delle date del sito.
- Gestione completa degli stati: messaggio durante il caricamento, avviso in caso di lista eventi vuota, messaggio di errore se un file non viene letto e fallback (Sede da definire) se un evento ha un sede_id non valido.

4. Integrazione delle condizioni meteo in tempo reale (info.html)
- Aggiunta della sezione Meteo a Torino adesso collegata tramite fetch all'API pubblica di Open-Meteo per le coordinate di Torino.
- Visualizzazione di temperatura, velocità del vento e ora di rilevazione del dato.
- Inserimento della citazione della fonte con link a Open-Meteo e alla licenza CC BY 4.0, del chiarimento che si tratta del meteo attuale (non delle previsioni per le date del festival) e della gestione degli errori non bloccante per il resto della pagina.