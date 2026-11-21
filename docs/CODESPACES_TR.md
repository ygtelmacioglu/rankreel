# RankReel – GitHub Codespaces üzerinden başlatma (Türkçe)

Bu rehber, bilgisayara program kurmadan RankReel'i tarayıcıdan çalıştırmak içindir.

## Önce bilmen gerekenler

- GitHub deposu: `ygtelmacioglu/rankreel`.
- Supabase projesini, SQL migration'larını ve owner hesabını daha önce oluşturduysan **yeniden yapma**.
- `.env.local` GitHub'a yüklenmez; her yeni Codespace'in kendi özel ortamında gerekir.
- API anahtarlarını veya şifreni hiçbir Issue, Pull Request ya da ekran görüntüsüne koyma.

## Başlatma

1. Kendi fork'unun **Code → Codespaces** bölümünden bir Codespace aç.
2. `.env.example` dosyasına bakarak `.env.local` oluştur ve mevcut Supabase bilgilerinin doğru olduğundan emin ol. `.env.local` dosyasını commit etme.
3. Terminalden `npm install` komutunu çalıştır (paketler zaten yüklüyse gerek olmayabilir).
4. Eski çalışan `npm run dev` terminali varsa onu **Ctrl+C** ile durdur. Birden fazla geliştirme sunucusu açma.
5. Tek bir terminalde `npm run dev` başlat. Terminalde `Ready` ve `Local: http://localhost:3000` yazmasını kontrol et.
6. Codespaces'te **Ports / Bağlantı Noktaları** sekmesine gir. Terminalin gösterdiği portu (**3000** veya **3001**) **Open in Browser / Tarayıcıda Aç** ile aç. Port görünürlüğü **Private** kalmalı.

## Karşılaşılan hatalar

- **Invalid Server Actions request:** Bu daldaki `next.config.ts`, yalnızca mevcut Codespace'in 3000/3001 yönlendirilmiş adreslerini güvenilir kabul eder. Değişikliği aldıktan sonra `npm run dev` işlemini yeniden başlatıp sayfayı yenile.
- **GitHub 404 / 3001:** Yanlış veya çalışmayan port bağlantısı açılmış olabilir. Terminaldeki **gerçek** port numarasıyla Codespaces'in **Ports** sekmesindeki portu eşleştir; eski URL'yi kullanma.
- **Supabase URL or Key required:** `.env.local` dosyası eksik olabilir. Anahtarları terminale yazdırmadan dosyanın varlığını ve alan adlarını kontrol et.
- **Failed to check existing users: User not allowed:** `service_role` anahtar türünü ve Supabase projesini kontrol et. Owner hesabı zaten oluşturulduysa tekrar oluşturma.

**Önemli:** GitHub'da kodu düzenlemek, açık Codespace'e değişiklikleri otomatik olarak aktarmayabilir. Yeni Codespace'i kendi fork'undan başlatmak daha temiz olabilir; ancak yeni Codespace'e gizli ortam değişkenlerinin güvenle yeniden tanımlanması gerekir.
