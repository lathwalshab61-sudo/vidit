import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFilePath = path.join(__dirname, 'db.json');

// Read JSON database
export const getDb = () => {
  try {
    const raw = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to read db.json:', error);
    return {
      destinations: [],
      hiddenGems: [],
      radarHubs: [],
      stories: [],
      packingItems: [],
      bookings: [],
      newsletterSubscribers: [],
      conciergeMessages: []
    };
  }
};

// Write JSON database
export const saveDb = (data) => {
  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Failed to write db.json:', error);
    return false;
  }
};

