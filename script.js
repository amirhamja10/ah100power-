<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ah100poroo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Loading Screen -->
    <div id="loading">
        <img src="https://dummyimage.com/100x100/000/fff&text=ah100poroo" alt="logo">
        <p>লোড হচ্ছে...</p>
    </div>

    <!-- Main Content -->
    <div id="main" style="display:none;">
        <header>
            <img src="https://dummyimage.com/80x80/000/fff&text=ah100poroo" alt="logo" class="logo">
        </header>

        <section id="activation">
            <h2>আপনার অ্যাকাউন্ট অ্যাক্টিভ করুন</h2>
            <button id="activateBtn">অ্যাক্টিভ করুন</button>
        </section>

        <section id="payment" style="display:none;">
            <h3>বিকাশ / নগদ এ পাঠান:</h3>
            <p id="number">01402642783</p>
            <button onclick="copyNumber()">নম্বর কপি করুন</button>
            
            <form id="paymentForm">
                <input type="text" placeholder="আপনার নাম্বার লিখুন" required>
                <input type="text" placeholder="ট্রানজেকশন আইডি লিখুন" required>
                <button type="submit">সাবমিট</button>
            </form>
        </section>

        <section id="pending" style="display:none;">
            <h3>আপনার অ্যাকাউন্ট পেন্ডিং আছে, অ্যাডমিন অ্যাক্টিভ করার পর নোটিফিকেশন পাবেন।</h3>
        </section>
    </div>

    <script src="script.js"></script<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
</body>
</html>