const translations = {
    en: {
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        contact: "Contact",
        bookTable: "Book a Table",
        welcomeTitle: "Welcome to Art Food",
        welcomeText: "Experience the unique atmosphere and taste of exquisite cuisine",
        aboutUs: "About Us",
        aboutItems: [
            "Signature European Cuisine",
            "Cozy Atmosphere & Stylish Interior",
            "Open Daily 10:00 AM - 11:00 PM",
            "Delivery & Reservations: +38 067 123 4567",
            "Live Music Every Friday & Saturday",
            "All Payment Methods Accepted",
            "Free Wi-Fi & Parking"
        ],
        wineTasting: "Wine Tasting",
        wineText: "Join us every Thursday at 7 PM for wine tastings with our sommelier",
        followUs: "Follow Us",
        followText: "Join us on social media for latest news and special offers",
        galleryTitle: "Explore Our Restaurant",
        galleryText: "Experience Art Food through our photos",
        bestDishes: "Our Best Dishes",
        bestDishesText: "Try our signature dishes from the chef",
        dishes: {
            salmon: {
                title: "Salmon Steak",
                desc: "with grilled vegetables",
                fullDesc: "Perfectly grilled salmon steak with a crispy crust outside and tender, flaky meat inside. Served with seasonal grilled vegetables and lemon-herb sauce.",
                ingredients: "Atlantic salmon, olive oil, garlic, rosemary, thyme, lemon, zucchini, bell peppers, asparagus, cherry tomatoes",
                calories: "420 calories",
                protein: "46g",
                fats: "28g",
                carbs: "8g"
            },
            risotto: {
                title: "Mushroom Risotto",
                desc: "with truffle oil",
                fullDesc: "Creamy Italian risotto made with Arborio rice and a medley of wild mushrooms, finished with a drizzle of truffle oil and freshly grated Parmesan cheese.",
                ingredients: "Arborio rice, mixed wild mushrooms, white wine, vegetable broth, onion, garlic, Parmesan cheese, truffle oil, butter, thyme",
                calories: "380 calories",
                protein: "12g",
                fats: "14g",
                carbs: "52g"
            },
            duck: {
                title: "Duck Breast",
                desc: "with caramelized apples",
                fullDesc: "Pan-seared duck breast with crispy skin, served medium-rare with caramelized apples and a honey-balsamic reduction sauce.",
                ingredients: "Muscovy duck breast, apples, honey, balsamic vinegar, butter, thyme, garlic, black pepper, sea salt",
                calories: "520 calories",
                protein: "32g",
                fats: "38g",
                carbs: "18g"
            },
            tiramisu: {
                title: "Tiramisu",
                desc: "signature recipe",
                fullDesc: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and rich mascarpone cream, dusted with premium cocoa powder.",
                ingredients: "Mascarpone cheese, ladyfinger cookies, espresso, eggs, sugar, cocoa powder, Marsala wine",
                calories: "340 calories",
                protein: "7g",
                fats: "22g",
                carbs: "28g"
            }
        },
        menuItems: {
            main: "Main Menu",
            wine: "Wine List",
            desserts: "Desserts",
            bar: "Bar"
        },
        bookingModal: {
            title: "Book a Table",
            name: "Your Name",
            phone: "Phone",
            date: "Date",
            time: "Time",
            guests: "Number of Guests",
            guestsOptions: {
                1: "1 Guest",
                2: "2 Guests",
                3: "3 Guests",
                4: "4 Guests",
                5: "5 Guests",
                6: "6 Guests",
                more: "More than 6"
            },
            requests: "Special Requests",
            bookNow: "Book Now",
            thankYou: "Thank you for your booking! We will contact you shortly."
        },
        dishModal: {
            ingredients: "Ingredients",
            nutritionFacts: "Nutrition Facts",
            calories: "Calories",
            protein: "Protein",
            fats: "Fats",
            carbs: "Carbohydrates"
        },
        menuModal: {
            mainMenu: {
                title: "Main Menu",
                categories: {
                    starters: {
                        title: "Starters",
                        items: [
                            { name: "Beef Carpaccio", description: "Thinly sliced beef with arugula, parmesan, and truffle oil", price: "18" },
                            { name: "Seafood Platter", description: "Fresh oysters, shrimp, and mussels with citrus dressing", price: "25" },
                            { name: "Bruschetta Selection", description: "Classic tomato, mushroom truffle, and goat cheese variations", price: "14" }
                        ]
                    },
                    mainCourses: {
                        title: "Main Courses",
                        items: [
                            { name: "Ribeye Steak", description: "Grilled 300g Black Angus with herb butter and roasted vegetables", price: "42" },
                            { name: "Sea Bass", description: "Mediterranean style with olives, capers, and cherry tomatoes", price: "34" },
                            { name: "Truffle Pasta", description: "Homemade tagliatelle with black truffle and parmesan cream", price: "28" }
                        ]
                    },
                    soups: {
                        title: "Soups",
                        items: [
                            { name: "Lobster Bisque", description: "Creamy lobster soup with cognac and fresh herbs", price: "16" },
                            { name: "Forest Mushroom Soup", description: "Wild mushroom cream soup with truffle oil", price: "12" }
                        ]
                    }
                }
            },
            wineList: {
                title: "Wine List",
                categories: {
                    sparklingWines: {
                        title: "Sparkling Wines",
                        items: [
                            { name: "Dom Pérignon", description: "Vintage 2012, France", price: "320" },
                            { name: "Prosecco Superiore", description: "DOCG, Extra Dry, Italy", price: "45" }
                        ]
                    },
                    redWines: {
                        title: "Red Wines",
                        items: [
                            { name: "Amarone della Valpolicella", description: "2015, Classico, Italy", price: "120" },
                            { name: "Château Margaux", description: "2010, Premier Cru, France", price: "580" }
                        ]
                    },
                    whiteWines: {
                        title: "White Wines",
                        items: [
                            { name: "Chablis Grand Cru", description: "2018, Burgundy, France", price: "95" },
                            { name: "Cloudy Bay", description: "Sauvignon Blanc, New Zealand", price: "65" }
                        ]
                    }
                }
            },
            desserts: {
                title: "Desserts",
                categories: {
                    classics: {
                        title: "Classic Desserts",
                        items: [
                            { name: "Crème Brûlée", description: "Classic vanilla bean with caramelized sugar", price: "12" },
                            { name: "Chocolate Soufflé", description: "With vanilla ice cream and berry sauce", price: "14" },
                            { name: "Apple Tart", description: "French style with almond cream and calvados", price: "11" }
                        ]
                    },
                    specialties: {
                        title: "Chef's Specialties",
                        items: [
                            { name: "Deconstructed Tiramisu", description: "Modern take on the classic Italian dessert", price: "13" },
                            { name: "Forest Berries Pavlova", description: "Meringue with fresh berries and cream", price: "15" }
                        ]
                    }
                }
            },
            bar: {
                title: "Bar Menu",
                categories: {
                    cocktails: {
                        title: "Signature Cocktails",
                        items: [
                            { name: "Art Food Martini", description: "Premium vodka, dry vermouth, olive brine", price: "16" },
                            { name: "Smoky Old Fashioned", description: "Bourbon, bitters, maple syrup, applewood smoke", price: "18" }
                        ]
                    },
                    spirits: {
                        title: "Premium Spirits",
                        items: [
                            { name: "Japanese Whisky", description: "Yamazaki 12 Years", price: "25" },
                            { name: "Cognac", description: "Hennessy XO", price: "35" }
                        ]
                    }
                }
            }
        }
    },
    ua: {
        about: "Про нас",
        menu: "Меню",
        gallery: "Галерея",
        contact: "Контакти",
        bookTable: "Забронювати стіл",
        welcomeTitle: "Ласкаво просимо до Art Food",
        welcomeText: "Відчуйте унікальну атмосферу та смак вишуканої кухні",
        aboutUs: "Про нас",
        aboutItems: [
            "Авторська європейська кухня",
            "Затишна атмосфера та стильний інтер'єр",
            "Працюємо щодня з 10:00 до 23:00",
            "Доставка та бронювання: +38 067 123 4567",
            "Жива музика щоп'ятниці та щосуботи",
            "Приймаємо всі види оплати",
            "Безкоштовний Wi-Fi та парковка"
        ],
        wineTasting: "Дегустація вин",
        wineText: "Приєднуйтесь до нас щочетверга о 19:00 для дегустації вин з нашим сомельє",
        followUs: "Слідкуйте за нами",
        followText: "Приєднуйтесь до нас у соціальних мережах для отримання останніх новин та спеціальних пропозицій",
        galleryTitle: "Ознайомтеся з нашим рестораном",
        galleryText: "Відчуйте Art Food через наші фотографії",
        bestDishes: "Наші найкращі страви",
        bestDishesText: "Спробуйте фірмові страви від шефа",
        dishes: {
            salmon: {
                title: "Стейк з лосося",
                desc: "з овочами гриль",
                fullDesc: "Ідеально приготований стейк з лосося з хрусткою скоринкою зовні та ніжним, соковитим м'ясом всередині. Подається з сезонними овочами гриль та лимонно-трав'яним соусом.",
                ingredients: "Лосось атлантичний, оливкова олія, часник, розмарин, чебрець, лимон, цукіні, болгарський перець, спаржа, помідори чері",
                calories: "420 калорій",
                protein: "46г",
                fats: "28г",
                carbs: "8г"
            },
            risotto: {
                title: "Різотто з грибами",
                desc: "з трюфельною олією",
                fullDesc: "Кремове італійське різотто, приготоване з рису Арборіо та асорті диких грибів, завершене трюфельною олією та свіжотертим сиром Пармезан.",
                ingredients: "Рис Арборіо, мікс диких грибів, біле вино, овочевий бульйон, цибуля, часник, сир Пармезан, трюфельна олія, вершкове масло, чебрець",
                calories: "380 калорій",
                protein: "12г",
                fats: "14г",
                carbs: "52г"
            },
            duck: {
                title: "Качина грудка",
                desc: "з карамелізованими яблуками",
                fullDesc: "Обсмажена качина грудка з хрусткою шкіркою, подається medium-rare з карамелізованими яблуками та медово-бальзамічним соусом.",
                ingredients: "Грудка качки Мускусної, яблука, мед, бальзамічний оцет, вершкове масло, чебрець, часник, чорний перець, морська сіль",
                calories: "520 калорій",
                protein: "32г",
                fats: "38г",
                carbs: "18г"
            },
            tiramisu: {
                title: "Тірамісу",
                desc: "фірмовий рецепт",
                fullDesc: "Класичний італійський десерт, приготований з шарів печива савоярді, просоченого кавою, та багатого крему маскарпоне, посипаний преміальним какао-порошком.",
                ingredients: "Сир маскарпоне, печиво савоярді, еспресо, яйця, цукор, какао-порошок, вино Марсала",
                calories: "340 калорій",
                protein: "7г",
                fats: "22г",
                carbs: "28г"
            }
        },
        menuItems: {
            main: "Основне меню",
            wine: "Винна карта",
            desserts: "Десерти",
            bar: "Бар"
        },
        bookingModal: {
            title: "Забронювати стіл",
            name: "Ваше ім'я",
            phone: "Телефон",
            date: "Дата",
            time: "Час",
            guests: "Кількість гостей",
            guestsOptions: {
                1: "1 гість",
                2: "2 гостя",
                3: "3 гостя",
                4: "4 гостя",
                5: "5 гостей",
                6: "6 гостей",
                more: "Більше 6"
            },
            requests: "Особливі побажання",
            bookNow: "Забронювати",
            thankYou: "Дякуємо за бронювання! Ми зв'яжемося з вами найближчим часом."
        },
        dishModal: {
            ingredients: "Склад",
            nutritionFacts: "Харчова цінність",
            calories: "Калорії",
            protein: "Білки",
            fats: "Жири",
            carbs: "Вуглеводи"
        },
        menuModal: {
            mainMenu: {
                title: "Основне Меню",
                categories: {
                    starters: {
                        title: "Закуски",
                        items: [
                            { name: "Карпачо з яловичини", description: "Тонко нарізана яловичина з рукколою, пармезаном та трюфельною олією", price: "18" },
                            { name: "Морське плато", description: "Свіжі устриці, креветки та мідії з цитрусовою заправкою", price: "25" },
                            { name: "Асорті брускет", description: "Класичні з томатами, грибами та трюфелем, козячим сиром", price: "14" }
                        ]
                    },
                    mainCourses: {
                        title: "Основні Страви",
                        items: [
                            { name: "Стейк Рібай", description: "Грильований 300г Чорний Ангус з трав'яним маслом та овочами", price: "42" },
                            { name: "Сібас", description: "Середземноморський стиль з оливками, каперсами та томатами чері", price: "34" },
                            { name: "Паста з трюфелем", description: "Домашня тальятеле з чорним трюфелем та вершковим соусом", price: "28" }
                        ]
                    },
                    soups: {
                        title: "Супи",
                        items: [
                            { name: "Суп з лобстера", description: "Вершковий суп з лобстером, коньяком та свіжими травами", price: "16" },
                            { name: "Грибний суп", description: "Крем-суп з лісових грибів з трюфельною олією", price: "12" }
                        ]
                    }
                }
            },
            wineList: {
                title: "Винна Карта",
                categories: {
                    sparklingWines: {
                        title: "Ігристі Вина",
                        items: [
                            { name: "Dom Pérignon", description: "Вінтаж 2012, Франція", price: "320" },
                            { name: "Prosecco Superiore", description: "DOCG, Extra Dry, Італія", price: "45" }
                        ]
                    },
                    redWines: {
                        title: "Червоні Вина",
                        items: [
                            { name: "Amarone della Valpolicella", description: "2015, Classico, Італія", price: "120" },
                            { name: "Château Margaux", description: "2010, Premier Cru, Франція", price: "580" }
                        ]
                    },
                    whiteWines: {
                        title: "Білі Вина",
                        items: [
                            { name: "Chablis Grand Cru", description: "2018, Бургундія, Франція", price: "95" },
                            { name: "Cloudy Bay", description: "Sauvignon Blanc, Нова Зеландія", price: "65" }
                        ]
                    }
                }
            },
            desserts: {
                title: "Десерти",
                categories: {
                    classics: {
                        title: "Класичні Десерти",
                        items: [
                            { name: "Крем-брюле", description: "Класичний з ванільними зернами та карамелізованим цукром", price: "12" },
                            { name: "Шоколадний суфле", description: "З ванільним морозивом та ягідним соусом", price: "14" },
                            { name: "Яблучний тарт", description: "Французький стиль з мигдальним кремом та кальвадосом", price: "11" }
                        ]
                    },
                    specialties: {
                        title: "Фірмові Десерти",
                        items: [
                            { name: "Деконструйований Тірамісу", description: "Сучасна інтерпретація класичного італійського десерту", price: "13" },
                            { name: "Павлова з лісовими ягодами", description: "Меренга зі свіжими ягодами та вершками", price: "15" }
                        ]
                    }
                }
            },
            bar: {
                title: "Барне Меню",
                categories: {
                    cocktails: {
                        title: "Фірмові Коктейлі",
                        items: [
                            { name: "Art Food Мартіні", description: "Преміальна горілка, сухий вермут, оливковий розсіл", price: "16" },
                            { name: "Димний Old Fashioned", description: "Бурбон, бітери, кленовий сироп, дим яблуневої деревини", price: "18" }
                        ]
                    },
                    spirits: {
                        title: "Преміальні Спиртні Напої",
                        items: [
                            { name: "Японський Віскі", description: "Yamazaki 12 років", price: "25" },
                            { name: "Коньяк", description: "Hennessy XO", price: "35" }
                        ]
                    }
                }
            }
        }
    }
}; 