# miamiboat


# Certificate instructions
https://flaviocopes.com/express-letsencrypt-ssl/

The files are located in SSL

// Installing certbot
sudo add-apt repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot

// Installing manually, we just need the files
certbot certonly --manual

// follow the process the certificates will be created in the following folder. There is not need to copy/paste them across as node server can read them directly
   /etc/letsencrypt/live/boatrides.miami/fullchain.pem
   /etc/letsencrypt/live/boatrides.miami/privkey.pem

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/boatrides.miami/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/boatrides.miami/privkey.pem
   Your cert will expire on 2019-05-29. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
