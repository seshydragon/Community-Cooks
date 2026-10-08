const RECIPES = [
{id:1,name:"Classic Pancakes",type:"Breakfast",time:20,cuisine:"American",tags:["breakfast","quick","vegetarian","budget"],description:"Fluffy pancakes with crisp edges and a soft center.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=85",ingredients:["1 1/2 cups all-purpose flour","3 1/2 tsp baking powder","1 tbsp sugar","1/4 tsp salt","1 1/4 cups milk","1 egg","3 tbsp melted butter"],steps:["Whisk the flour, baking powder, sugar, and salt.","Whisk milk, egg, and melted butter in a second bowl.","Combine wet and dry ingredients until just mixed; a few lumps are fine.","Heat a lightly buttered skillet over medium heat and pour about 1/4 cup batter per pancake.","Cook until bubbles form, flip, and cook until golden. Serve warm."]},
{id:2,name:"Avocado Egg Toast",type:"Breakfast",time:12,cuisine:"American",tags:["breakfast","quick","vegetarian"],description:"Creamy avocado, a fried egg, and crisp toast.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=85",ingredients:["2 slices sourdough bread","1 ripe avocado","2 eggs","1 tsp lemon juice","Salt and black pepper","Red pepper flakes"],steps:["Toast the bread until crisp.","Mash avocado with lemon juice, salt, and pepper.","Fry the eggs to your preferred doneness.","Spread avocado over toast and top with an egg.","Finish with black pepper and red pepper flakes."]},
{id:3,name:"Berry Yogurt Parfait",type:"Breakfast",time:8,cuisine:"American",tags:["breakfast","quick","vegetarian"],description:"Layers of yogurt, berries, and crunchy granola.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",ingredients:["1 1/2 cups Greek yogurt","1 cup mixed berries","1/2 cup granola","1 tbsp honey"],steps:["Spoon half the yogurt into two glasses.","Add half the berries and granola.","Repeat the layers.","Drizzle with honey and serve chilled."]},
{id:4,name:"Breakfast Burrito",type:"Breakfast",time:20,cuisine:"Mexican",tags:["breakfast","quick","vegetarian","budget"],description:"A warm tortilla packed with eggs, beans, cheese, and salsa.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",ingredients:["2 large flour tortillas","4 eggs","1/2 cup black beans","1/2 cup shredded cheddar","1/4 cup salsa","1 tbsp oil","Salt and pepper"],steps:["Warm the tortillas in a dry skillet.","Scramble the eggs in oil and season with salt and pepper.","Warm the black beans.","Layer eggs, beans, cheese, and salsa down the center of each tortilla.","Fold in the sides, roll tightly, and toast seam-side down for 1 minute."]},
{id:5,name:"Banana Oatmeal",type:"Breakfast",time:10,cuisine:"American",tags:["breakfast","quick","vegetarian","budget"],description:"Creamy oats cooked with banana and cinnamon.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup rolled oats","2 cups milk or water","1 banana","1/2 tsp cinnamon","1 tsp honey","Pinch of salt"],steps:["Bring milk or water and salt to a simmer.","Stir in oats and cook for 5 minutes.","Mash half the banana into the oats.","Top with the remaining banana, cinnamon, and honey."]},
{id:6,name:"Shakshuka",type:"Breakfast",time:25,cuisine:"Middle Eastern",tags:["breakfast","vegetarian"],description:"Eggs gently cooked in a spiced tomato and pepper sauce.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1200&q=85",ingredients:["1 tbsp olive oil","1 onion, diced","1 red bell pepper, diced","2 garlic cloves, minced","1 tsp cumin","1/2 tsp paprika","1 can crushed tomatoes","4 eggs","Salt and pepper"],steps:["Cook onion and pepper in olive oil until soft.","Add garlic, cumin, and paprika for 30 seconds.","Stir in tomatoes and simmer for 8 minutes.","Make four wells and crack in the eggs.","Cover and cook until the whites are set. Season and serve with bread."]},
{id:7,name:"Chicken Caesar Wrap",type:"Lunch",time:15,cuisine:"American",tags:["lunch","quick"],description:"Grilled chicken, romaine, parmesan, and Caesar dressing in a soft wrap.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",ingredients:["2 flour tortillas","1 cup cooked chicken, sliced","2 cups chopped romaine","1/4 cup parmesan","3 tbsp Caesar dressing","Black pepper"],steps:["Warm the tortillas briefly.","Toss romaine with Caesar dressing and parmesan.","Place chicken down the center of each tortilla.","Add dressed lettuce and black pepper.","Fold the sides in and roll tightly."]},
{id:8,name:"Caprese Panini",type:"Lunch",time:15,cuisine:"Italian",tags:["lunch","quick","vegetarian"],description:"Toasted bread with mozzarella, tomato, basil, and balsamic.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85",ingredients:["4 slices ciabatta","4 oz fresh mozzarella","1 large tomato","Fresh basil","1 tbsp balsamic glaze","1 tbsp olive oil"],steps:["Layer mozzarella, tomato, and basil between the bread.","Brush the outside lightly with olive oil.","Toast in a panini press or skillet until crisp and the cheese softens.","Drizzle with balsamic glaze and slice."]},
{id:9,name:"Falafel Pita",type:"Lunch",time:25,cuisine:"Middle Eastern",tags:["lunch","vegetarian"],description:"Crisp falafel with cucumber, tomato, greens, and tahini.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&w=1200&q=85",ingredients:["6 cooked falafel","2 pita breads","1/2 cucumber, sliced","1 tomato, diced","1 cup lettuce","1/4 cup tahini sauce"],steps:["Warm the pita.","Heat falafel until crisp.","Fill each pita with lettuce, cucumber, tomato, and falafel.","Drizzle with tahini and serve."]},
{id:10,name:"Tuna Rice Bowl",type:"Lunch",time:20,cuisine:"Japanese-inspired",tags:["lunch","quick"],description:"Warm rice topped with savory tuna, cucumber, and sesame.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",ingredients:["2 cups cooked rice","1 can tuna, drained","1 tbsp mayonnaise","1 tsp soy sauce","1/2 cucumber, sliced","1 tsp sesame seeds"],steps:["Mix tuna with mayonnaise and soy sauce.","Divide warm rice between bowls.","Top with tuna and cucumber.","Finish with sesame seeds."]},
{id:11,name:"Tomato Soup & Grilled Cheese",type:"Lunch",time:25,cuisine:"American",tags:["lunch","quick","vegetarian","budget"],description:"Creamy tomato soup paired with a crisp, cheesy sandwich.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",ingredients:["1 tbsp olive oil","1/2 onion, diced","2 cups crushed tomatoes","1 cup vegetable broth","1/4 cup cream","4 bread slices","2 slices cheddar","1 tbsp butter"],steps:["Cook onion in olive oil until soft.","Add tomatoes and broth; simmer for 12 minutes.","Blend until smooth, then stir in cream.","Butter bread, add cheese, and toast both sides until golden.","Serve the grilled cheese with hot soup."]},
{id:12,name:"Veggie Hummus Wrap",type:"Lunch",time:10,cuisine:"Mediterranean",tags:["lunch","quick","vegetarian","budget"],description:"Hummus and crunchy vegetables wrapped up for an easy lunch.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",ingredients:["2 flour tortillas","1/2 cup hummus","1/2 cucumber, sliced","1 tomato, sliced","1/2 bell pepper, sliced","1 cup spinach"],steps:["Spread hummus over each tortilla.","Add spinach and sliced vegetables.","Fold the sides inward and roll tightly.","Slice in half and serve."]},
{id:13,name:"Cinnamon Apple Toast",type:"Snack",time:7,cuisine:"American",tags:["snack","quick","vegetarian","budget"],description:"Toast topped with warm apple slices, cinnamon, and honey.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=85",ingredients:["2 slices bread","1 apple, thinly sliced","1 tsp butter","1/2 tsp cinnamon","1 tsp honey"],steps:["Toast the bread.","Cook apple slices in butter for 3 minutes.","Sprinkle with cinnamon.","Pile apples onto toast and drizzle with honey."]},
{id:14,name:"Spiced Popcorn",type:"Snack",time:8,cuisine:"American",tags:["snack","quick","vegetarian","budget"],description:"Fresh popcorn tossed with smoky paprika and garlic.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1578849278619-1cf8a44f6a0c?auto=format&fit=crop&w=1200&q=85",ingredients:["1/3 cup popcorn kernels","1 tbsp butter","1/2 tsp smoked paprika","1/4 tsp garlic powder","Salt"],steps:["Pop the kernels in a covered pot over medium heat.","Melt the butter.","Toss popcorn with butter, paprika, garlic powder, and salt.","Serve immediately."]},
{id:15,name:"Guacamole & Chips",type:"Snack",time:10,cuisine:"Mexican",tags:["snack","quick","vegetarian"],description:"Fresh avocado guacamole with lime, tomato, onion, and tortilla chips.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",ingredients:["2 ripe avocados","1/2 lime, juiced","2 tbsp diced red onion","1/2 tomato, diced","1 tbsp chopped cilantro","1/4 tsp salt","Tortilla chips"],steps:["Scoop avocado into a bowl and mash with a fork.","Stir in lime juice, onion, tomato, and cilantro.","Season with salt and taste.","Serve immediately with tortilla chips."]},
{id:16,name:"Energy Bites",type:"Snack",time:15,cuisine:"American",tags:["snack","quick","vegetarian"],description:"No-bake oat and peanut butter bites for a quick homemade snack.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup rolled oats","1/2 cup peanut butter","1/3 cup honey","1/3 cup mini chocolate chips","1 tbsp chia seeds"],steps:["Stir all ingredients together in a bowl.","Chill for 20 minutes if the mixture feels sticky.","Roll into small balls with clean hands.","Refrigerate in a sealed container."]},
{id:17,name:"Cucumber Yogurt Dip",type:"Snack",time:10,cuisine:"Mediterranean",tags:["snack","quick","vegetarian"],description:"Cool cucumber and yogurt dip with garlic and herbs.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup Greek yogurt","1/2 cucumber, grated","1 garlic clove, minced","1 tbsp lemon juice","1 tbsp chopped dill","Salt"],steps:["Squeeze excess water from the grated cucumber.","Mix cucumber, yogurt, garlic, lemon, and dill.","Season with salt.","Chill for 10 minutes and serve with vegetables or pita."]},
{id:18,name:"Honey Banana Toast",type:"Snack",time:5,cuisine:"American",tags:["snack","quick","vegetarian","budget"],description:"Crisp toast topped with banana, honey, and cinnamon.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=85",ingredients:["2 slices bread","1 banana","1 tsp honey","1/4 tsp cinnamon","1 tbsp peanut butter, optional"],steps:["Toast the bread.","Spread with peanut butter if using.","Top with sliced banana.","Drizzle with honey and dust with cinnamon."]},
{id:19,name:"Mango Lassi",type:"Drink",time:5,cuisine:"Indian",tags:["drink","quick","vegetarian"],description:"A cold, creamy mango and yogurt drink.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup mango chunks","1 cup plain yogurt","1/2 cup milk","1 tbsp honey","Pinch of cardamom","Ice"],steps:["Add mango, yogurt, milk, honey, and cardamom to a blender.","Blend until smooth.","Add ice and blend briefly again.","Pour and serve cold."]},
{id:20,name:"Iced Matcha Latte",type:"Drink",time:5,cuisine:"Japanese-inspired",tags:["drink","quick","vegetarian"],description:"Earthy matcha shaken with milk and served over ice.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=85",ingredients:["1 tsp matcha powder","2 tbsp warm water","1 cup milk","1 tsp honey","Ice"],steps:["Whisk matcha with warm water until smooth.","Fill a glass with ice.","Pour in milk and honey.","Top with the matcha and stir."]},
{id:21,name:"Strawberry Lemonade",type:"Drink",time:10,cuisine:"American",tags:["drink","quick","vegetarian"],description:"Fresh strawberries blended with bright lemon and cold water.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup strawberries","1/2 cup lemon juice","3 cups cold water","1/3 cup sugar","Ice"],steps:["Blend strawberries with 1 cup water.","Stir the strawberry mixture with lemon juice, remaining water, and sugar.","Taste and adjust sweetness.","Serve over ice."]},
{id:22,name:"Mint Lime Cooler",type:"Drink",time:7,cuisine:"Mediterranean",tags:["drink","quick","vegetarian"],description:"A bright lime drink with fresh mint and sparkling water.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=85",ingredients:["2 limes","8 mint leaves","1 tbsp sugar","1 cup sparkling water","Ice"],steps:["Muddle lime juice, mint, and sugar in a glass.","Fill the glass with ice.","Top with sparkling water.","Stir gently and garnish with mint."]},
{id:23,name:"Cold Brew Latte",type:"Drink",time:5,cuisine:"American",tags:["drink","quick","vegetarian"],description:"Cold brew coffee balanced with creamy milk over ice.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup cold brew coffee","1/2 cup milk","1 tsp maple syrup","Ice"],steps:["Fill a glass with ice.","Pour in cold brew.","Add milk and maple syrup.","Stir and serve."]},
{id:24,name:"Peach Iced Tea",type:"Drink",time:10,cuisine:"American",tags:["drink","quick","vegetarian"],description:"Black tea chilled with peach and a little sweetness.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",ingredients:["2 black tea bags","2 cups hot water","1 ripe peach, sliced","2 tbsp sugar","1 cup cold water","Ice"],steps:["Steep tea bags in hot water for 5 minutes.","Remove tea bags and stir in sugar.","Add cold water and peach slices.","Chill and serve over ice."]},
{id:25,name:"Chocolate Mug Cake",type:"Dessert",time:5,cuisine:"American",tags:["dessert","quick","vegetarian"],description:"A warm single-serving chocolate cake made in a mug.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",ingredients:["4 tbsp flour","2 tbsp sugar","1 tbsp cocoa powder","1/8 tsp baking powder","3 tbsp milk","1 tbsp oil","1 tbsp chocolate chips"],steps:["Mix flour, sugar, cocoa, and baking powder in a microwave-safe mug.","Stir in milk and oil until smooth.","Fold in chocolate chips.","Microwave for about 60 to 80 seconds; let cool briefly before eating."]},
{id:26,name:"Berry Cheesecake Cups",type:"Dessert",time:15,cuisine:"American",tags:["dessert","quick","vegetarian"],description:"Individual cheesecake cups with berries and a crumb crust.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",ingredients:["4 oz cream cheese","1/4 cup Greek yogurt","2 tbsp powdered sugar","1/2 tsp vanilla","1/2 cup crushed graham crackers","1/2 cup berries"],steps:["Beat cream cheese, yogurt, powdered sugar, and vanilla until smooth.","Divide graham crumbs between two cups.","Spoon the cheesecake mixture over the crumbs.","Top with berries and chill before serving."]},
{id:27,name:"Cinnamon Churro Bites",type:"Dessert",time:20,cuisine:"Mexican",tags:["dessert","quick","vegetarian"],description:"Golden dough bites tossed in cinnamon sugar.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup flour","1 cup water","2 tbsp butter","1 tbsp sugar","1 egg","1/2 tsp cinnamon","1/4 cup sugar","Oil for frying"],steps:["Heat water, butter, and 1 tbsp sugar until simmering.","Stir in flour until a dough forms; cool slightly.","Mix in the egg.","Pipe small pieces into hot oil and fry until golden.","Toss warm bites with cinnamon and sugar."]},
{id:28,name:"Mango Sticky Rice",type:"Dessert",time:30,cuisine:"Thai",tags:["dessert","vegetarian"],description:"Sweet coconut sticky rice served with ripe mango.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup glutinous rice","3/4 cup coconut milk","1/4 cup sugar","1/4 tsp salt","1 ripe mango","1 tsp sesame seeds"],steps:["Cook glutinous rice according to package directions.","Warm coconut milk with sugar and salt without boiling.","Stir most of the coconut mixture into warm rice and rest for 10 minutes.","Slice mango and serve with the sticky rice.","Drizzle with remaining coconut sauce and sesame seeds."]},
{id:29,name:"Lemon Shortbread",type:"Dessert",time:25,cuisine:"American",tags:["dessert","quick","vegetarian"],description:"Buttery shortbread with fresh lemon zest.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=85",ingredients:["1 cup butter, softened","1/2 cup sugar","2 cups flour","1 tbsp lemon zest","1/4 tsp salt"],steps:["Heat oven to 350°F.","Cream butter and sugar.","Mix in flour, lemon zest, and salt until a soft dough forms.","Press into a lined pan and score into pieces.","Bake 18 to 22 minutes until lightly golden. Cool before cutting."]},
{id:30,name:"Apple Crisp",type:"Dessert",time:40,cuisine:"American",tags:["dessert","vegetarian"],description:"Warm cinnamon apples under a crisp oat topping.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1562007908-17c67e878c8c?auto=format&fit=crop&w=1200&q=85",ingredients:["4 apples, sliced","1 tbsp lemon juice","1/3 cup brown sugar","1 tsp cinnamon","3/4 cup rolled oats","1/2 cup flour","4 tbsp butter"],steps:["Heat oven to 375°F.","Toss apples with lemon juice, half the sugar, and cinnamon.","Mix oats, flour, remaining sugar, and butter into a crumbly topping.","Place apples in a baking dish and cover with topping.","Bake 30 minutes until bubbling and golden."]},
{id:31,name:"Chicken Tikka Masala",type:"Dinner",time:45,cuisine:"Indian",tags:["dinner"],description:"Tender chicken simmered in a tomato, yogurt, and spice sauce.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85",ingredients:["1 lb chicken breast, cubed","1/2 cup plain yogurt","1 tbsp lemon juice","1 tbsp oil","1 onion, diced","2 garlic cloves","1 tbsp garam masala","1 tsp cumin","1 can crushed tomatoes","1/2 cup cream","Salt"],steps:["Marinate chicken with yogurt, lemon, and half the spices for 15 minutes.","Brown chicken in oil and set aside.","Cook onion and garlic until soft; add remaining spices.","Add tomatoes and simmer for 10 minutes.","Return chicken, add cream, and simmer until chicken is cooked through."]},
{id:32,name:"Vegetable Pad Thai",type:"Dinner",time:30,cuisine:"Thai",tags:["dinner","vegetarian"],description:"Rice noodles tossed with vegetables, lime, and a savory pad Thai sauce.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=85",ingredients:["8 oz rice noodles","1 tbsp oil","1 cup bean sprouts","1 carrot, julienned","2 eggs","2 tbsp soy sauce","1 tbsp lime juice","1 tbsp brown sugar","1/4 cup peanuts"],steps:["Soak or cook noodles according to package directions.","Mix soy sauce, lime juice, and brown sugar.","Stir-fry vegetables in oil for 2 minutes.","Push vegetables aside and scramble the eggs.","Add noodles and sauce; toss until coated. Top with peanuts and sprouts."]},
{id:33,name:"Beef Bulgogi",type:"Dinner",time:30,cuisine:"Korean",tags:["dinner"],description:"Thin beef slices quickly marinated and caramelized in a savory sauce.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=85",ingredients:["1 lb thin-sliced beef","2 tbsp soy sauce","1 tbsp brown sugar","1 tsp sesame oil","2 garlic cloves, minced","1/2 onion, sliced","1 green onion","1 tsp sesame seeds"],steps:["Mix soy sauce, sugar, sesame oil, and garlic.","Toss beef and onion in the marinade for 15 minutes.","Cook beef in a very hot skillet in batches until browned.","Return everything to the pan briefly to caramelize.","Top with green onion and sesame seeds."]},
{id:34,name:"Margherita Pizza",type:"Dinner",time:30,cuisine:"Italian",tags:["dinner","vegetarian"],description:"Crisp pizza dough with tomato, mozzarella, basil, and olive oil.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85",ingredients:["1 pizza dough","1/2 cup tomato sauce","4 oz fresh mozzarella","Fresh basil","1 tbsp olive oil","Salt"],steps:["Heat oven to its highest setting with a baking tray or stone inside.","Stretch dough into a thin round.","Spread with tomato sauce and add mozzarella.","Bake until the crust is browned and cheese is bubbling.","Finish with basil, olive oil, and a pinch of salt."]},
{id:35,name:"Salmon Teriyaki",type:"Dinner",time:25,cuisine:"Japanese-inspired",tags:["dinner","quick"],description:"Pan-seared salmon glazed with a quick homemade teriyaki sauce.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=85",ingredients:["2 salmon fillets","2 tbsp soy sauce","1 tbsp honey","1 tsp rice vinegar","1 garlic clove","1 tsp sesame oil","1 green onion"],steps:["Mix soy sauce, honey, vinegar, garlic, and sesame oil.","Sear salmon skin-side down until crisp.","Flip and cook until nearly done.","Pour in the sauce and simmer until glossy and the salmon is cooked through.","Garnish with green onion."]},
{id:36,name:"Chickpea Coconut Curry",type:"Dinner",time:35,cuisine:"Indian-inspired",tags:["dinner","vegetarian","budget"],description:"Chickpeas simmered in a creamy coconut tomato curry.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",ingredients:["1 tbsp oil","1 onion, diced","2 garlic cloves","1 tbsp curry powder","1 can chickpeas","1 can diced tomatoes","1 cup coconut milk","1/2 tsp salt","Spinach, optional"],steps:["Cook onion in oil until soft.","Add garlic and curry powder for 30 seconds.","Stir in chickpeas and tomatoes.","Add coconut milk and simmer for 15 minutes.","Stir in spinach if using and cook until wilted. Serve with rice."]}
];

let LIBRARY_RECIPES = RECIPES;
const IMAGE_CACHE_KEY="ccExternalRecipeImages-v3";
const IMAGE_USED_KEY="ccExternalRecipeImageUrls-v3";
const BUILTIN_IMAGES={};

function imageCache(){return storage(IMAGE_CACHE_KEY,{});}
function imageUsed(){return new Set(storage(IMAGE_USED_KEY,[]));}
function saveImageState(cache,used){
  setStorage(IMAGE_CACHE_KEY,cache);
  setStorage(IMAGE_USED_KEY,[...used].slice(-500));
}
function normalizeImageText(value){
  return String(value||"").toLowerCase()
    .replace(/[^a-z0-9\\s-]/g," ")
    .replace(/\\b(the|a|an|classic|homemade|quick|easy|recipe|food|dish|plate|bowl)\\b/g," ")
    .replace(/\\s+/g," ").trim();
}
function recipeSearchTerms(r){
  const name=normalizeImageText(r.name);
  const cuisine=normalizeImageText(r.cuisine).replace(/-inspired/g,"");
  const type=normalizeImageText(r.type);
  const tags=(r.tags||[]).map(normalizeImageText).filter(Boolean);
  return {name,cuisine,type,tags};
}
function openverseQueries(r){
  const {name,cuisine,type}=recipeSearchTerms(r);
  const queries=[
    '"' + name + '"',
    '"' + name + '" ' + cuisine,
    name + ' ' + cuisine + ' ' + type
  ];
  return [...new Set(queries.map(x=>x.trim()).filter(Boolean))];
}
function scoreOpenverseResult(item,r){
  const {name,cuisine,type}=recipeSearchTerms(r);
  const hay=normalizeImageText([
    item?.title,item?.description,item?.tags?.map?.(x=>x?.name||x),
    item?.meta_data?.description
  ].flat().join(" "));
  if(!item?.url || !hay) return -100;
  const nameWords=name.split(" ").filter(w=>w.length>2);
  const exact=hay.includes(name) ? 12 : 0;
  const wordHits=nameWords.reduce((n,w)=>n+(hay.includes(w)?1:0),0);
  const cuisineHit=cuisine && hay.includes(cuisine)?3:0;
  const typeHit=type && hay.includes(type)?1:0;
  return exact + wordHits*2 + cuisineHit + typeHit;
}
async function resolveExternalImage(r,cache,used){
  const key=String(r.id);
  if(cache[key]?.url) return cache[key];

  try{
    const candidates=[];
    for(const query of openverseQueries(r)){
      const endpoint="https://api.openverse.org/v1/images/?q="+encodeURIComponent(query)+"&license=by,by-sa,cc0&source=wikimedia&page_size=20";
      const response=await fetch(endpoint,{headers:{Accept:"application/json"}});
      if(!response.ok) continue;
      const payload=await response.json();
      for(const item of (Array.isArray(payload.results)?payload.results:[])){
        if(!item?.url || used.has(item.url)) continue;
        candidates.push({item,score:scoreOpenverseResult(item,r)});
      }
      if(candidates.some(x=>x.score>=12)) break;
    }
    candidates.sort((x,y)=>y.score-x.score);
    const best=candidates[0];
    if(!best || best.score<6) throw new Error("No sufficiently relevant image");
    const pick=best.item;
    const record={
      url:pick.url,
      creator:pick.creator||"Unknown creator",
      source:pick.source||"Openverse",
      license:pick.license||"",
      license_url:pick.license_url||"",
      landing_url:pick.foreign_landing_url||pick.detail_url||"https://openverse.org/"
    };
    cache[key]=record;
    used.add(record.url);
    saveImageState(cache,used);
    return record;
  }catch(error){
    console.warn("External image lookup failed for",r.name,error);
    const fallbackByType={
      breakfast:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
      lunch:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
      dinner:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
      snack:"https://images.unsplash.com/photo-1599599810694-b5ac4dd7a2b1?auto=format&fit=crop&w=1200&q=85",
      drink:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85",
      dessert:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
    };
    const fallback=fallbackByType[String(r.type||"").toLowerCase()]||fallbackByType.dinner;
    return {url:fallback,creator:"Openverse fallback",source:"Openverse"};
  }
}
async function hydrateRecipeImages(){
  const cache=imageCache(), used=imageUsed();
  const targets=LIBRARY_RECIPES.filter(r=>!r.imageMeta?.url);
  const queue=[...targets];
  const worker=async()=>{
    while(queue.length){
      const r=queue.shift();
      const record=await resolveExternalImage(r,cache,used);
      r.image=record.url;
      r.imageMeta=record;
    }
  };
  await Promise.all([worker(),worker(),worker(),worker()]);
  saveImageState(cache,used);
}

async function loadRecipeLibrary(){
 try{
  const response=await fetch("data/recipes.json");
  if(!response.ok) throw new Error("recipe library unavailable");
  const data=await response.json();
  if(Array.isArray(data)&&data.length){
    LIBRARY_RECIPES=data.map(r=>{
      const built=BUILTIN_IMAGES[String(r.id)];
      return built ? {...r,image:built} : {...r,image:"",imageMeta:null};
    });
    await hydrateRecipeImages();
  }
 }catch(error){ console.warn("Using built-in recipe library.",error); }
 renderRecipes(); renderSaved(); renderHistory(); renderRecipe(); window.renderPlanner?.();
}
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function storage(key,fallback){try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}catch{return fallback}}
function setStorage(key,value){localStorage.setItem(key,JSON.stringify(value))}
function getUserRecipes(){return storage("ccRecipes",[])}
function allRecipes(){return [...LIBRARY_RECIPES,...getUserRecipes()]}
function findRecipe(id){return allRecipes().find(r=>String(r.id)===String(id))}
function points(){return Number(localStorage.getItem("ccPoints")||0)}
function awardPoints(amount,key){
 const claimed=storage("ccPointRewards",{});
 if(claimed[key]) return false;
 claimed[key]=new Date().toISOString();
 setStorage("ccPointRewards",claimed);
 localStorage.setItem("ccPoints",String(points()+amount));
 return true;
}
function addPoints(amount,reason){return awardPoints(amount,reason+"-"+Date.now())?points():points()}
function recipeImage(r){
  if(r.image) return r.image;
  const type=String(r.type||"").toLowerCase();
  return ({
    breakfast:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
    lunch:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    dinner:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
    snack:"https://images.unsplash.com/photo-1599599810694-b5ac4dd7a2b1?auto=format&fit=crop&w=1200&q=85",
    drink:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85",
    dessert:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
  })[type]||"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85";
}
function imageFallback(img){
  img.onerror=null;
  const type=img.dataset.type||"dinner";
  const fallbacks={
    breakfast:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
    lunch:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    dinner:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
    snack:"https://images.unsplash.com/photo-1599599810694-b5ac4dd7a2b1?auto=format&fit=crop&w=1200&q=85",
    drink:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85",
    dessert:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
  };
  img.src=fallbacks[type]||fallbacks.dinner;
}
function addOpenverseCredit(){
 document.querySelectorAll(".site-footer").forEach(footer=>{
   if(footer.querySelector(".openverse-credit")) return;
   const p=document.createElement("p");
   p.className="openverse-credit";
   p.textContent="Recipe photography is sourced through Openverse from openly licensed works.";
   footer.appendChild(p);
 });
}


function recipeCard(r){
 return '<article class="recipe-card"><a href="recipe.html?id='+encodeURIComponent(r.id)+'"><div class="recipe-image"><img src="'+esc(recipeImage(r))+'" alt="'+esc(r.name)+'" loading="lazy" onerror="imageFallback(this, this.dataset.type)" data-type="'+esc(r.type.toLowerCase())+'" ></div><div class="recipe-card-body"><div class="recipe-meta"><span>'+esc(r.type)+'</span><span>'+r.time+' min</span></div><h2>'+esc(r.name)+'</h2><p>'+esc(r.description)+'</p><div class="recipe-footer"><span>By '+esc(r.creator||"Community Cooks")+'</span><button type="button" class="save-button" data-save="'+esc(r.id)+'">'+(isSaved(r.id)?"Saved":"Save")+'</button></div></div></a></article>';
}
function isSaved(id){return storage("ccSaved",[]).map(String).includes(String(id))}
function toggleSaved(id){
 let saved=storage("ccSaved",[]).map(String), key=String(id);
 saved=saved.includes(key)?saved.filter(x=>x!==key):[...saved,key];
 setStorage("ccSaved",saved); return saved.includes(key);
}
function renderRecipes(){
 const grid=$("recipeGrid"), empty=$("emptyState"); if(!grid)return;
 const query=($("searchInput")?.value||"").trim().toLowerCase();
 const active=document.querySelector(".chip.active")?.dataset.filter||"all";
 const cuisines=selectedRecipeFilters("cuisine"), meals=selectedRecipeFilters("meal"), diets=selectedRecipeFilters("diet"), times=selectedRecipeFilters("time");
 const filtered=allRecipes().filter(r=>{
   const hay=[r.name,r.description,r.type,r.cuisine,...(r.tags||[])].join(" ").toLowerCase();
   const tags=new Set(r.tags||[]);
   const matchQuery=!query||hay.includes(query);
   const matchLegacy=active==="all"||tags.has(active)||(active==="quick"&&Number(r.time)<30);
   const matchCuisine=!cuisines.length||cuisines.includes(r.cuisine);
   const matchMeal=!meals.length||meals.includes(String(r.type).toLowerCase());
   const matchDiet=!diets.length||diets.every(d=>tags.has(d)||(d==="vegetarian"&&tags.has("vegan")));
   const matchTime=!times.length||times.some(t=>Number(r.time)<=Number(t));
   return matchQuery&&matchLegacy&&matchCuisine&&matchMeal&&matchDiet&&matchTime;
 });
 grid.innerHTML=filtered.map(recipeCard).join("");
 if(empty)empty.hidden=filtered.length!==0;
 grid.querySelectorAll("[data-save]").forEach(btn=>btn.addEventListener("click",e=>{
   e.preventDefault(); e.stopPropagation(); const saved=toggleSaved(btn.dataset.save); btn.textContent=saved?"Saved":"Save";
 }));
}
function renderRecipe(){
 const root=$("recipePage"); if(!root)return;
 const r=findRecipe(new URLSearchParams(location.search).get("id"));
 if(!r){root.innerHTML='<div class="page-shell"><section class="empty-state"><h1>Recipe not found.</h1><a class="button button-blue" href="discover.html">Back to recipes</a></section></div>';return}
 const saved=isSaved(r.id);
 const meta=r.imageMeta;
 const credit=meta?.source==="Unsplash"?"Image via Unsplash":meta?.creator?('Image by '+meta.creator+' via '+(meta.source||"Openverse")):"Image sourced through Openverse";
 root.innerHTML='<section class="recipe-hero"><div class="recipe-hero-image"><img src="'+esc(r.image)+'" alt="'+esc(r.name)+'"></div><div class="recipe-hero-copy"><p class="eyebrow">'+esc(r.type)+' · '+r.time+' minutes</p><h1>'+esc(r.name)+'</h1><p>'+esc(r.description)+'</p><p class="recipe-byline">Created by '+esc(r.creator||"Community Cooks")+'</p><p class="image-credit">'+esc(credit)+'</p><div class="recipe-actions"><button class="button button-blue" id="cookButton">Start Cook Mode</button><button class="chip" id="saveRecipe">'+(saved?"Saved recipe":"Save recipe")+'</button><a class="chip" href="shopping-list.html?recipe='+encodeURIComponent(r.id)+'">Shopping list</a></div></div></section><section class="recipe-content"><div><p class="eyebrow">Ingredients</p><ul class="ingredient-list">'+r.ingredients.map(x=>"<li>"+esc(x)+"</li>").join("")+'</ul></div><div><p class="eyebrow">Instructions</p><ol class="step-list">'+r.steps.map((x,i)=>"<li><span>"+String(i+1).padStart(2,"0")+"</span><p>"+esc(x)+"</p></li>").join("")+"</ol></div></section>";
 $("saveRecipe")?.addEventListener("click",()=>{$("saveRecipe").textContent=toggleSaved(r.id)?"Saved recipe":"Save recipe"});
 $("cookButton")?.addEventListener("click",()=>location.href="cook.html?id="+encodeURIComponent(r.id));
}
function renderSaved(){
 const grid=$("savedGrid"); if(!grid)return;
 const saved=storage("ccSaved",[]).map(String), list=allRecipes().filter(r=>saved.includes(String(r.id)));
 grid.innerHTML=list.map(recipeCard).join("");
 $("savedEmpty")?.toggleAttribute("hidden",list.length>0);
 grid.querySelectorAll("[data-save]").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();toggleSaved(btn.dataset.save);renderSaved()}));
}
function renderHistory(){
 const root=$("historyList"); if(!root)return;
 const history=storage("ccHistory",[]);
 root.innerHTML=history.length?history.map(h=>{const r=findRecipe(h.id);return r?'<a class="history-row" href="recipe.html?id='+r.id+'"><img src="'+esc(r.image)+'" alt=""><div><strong>'+esc(r.name)+'</strong><span>Cooked '+esc(h.date)+'</span></div><b>+30</b></a>':""}).join(""):'<div class="empty-state"><h2>No cooking history yet.</h2><p>Start a recipe in Cook Mode and it will appear here.</p></div>';
}
function logCook(id){
 const history=storage("ccHistory",[]);
 history.unshift({id,date:new Date().toLocaleDateString()});
 setStorage("ccHistory",history.slice(0,50));
 awardPoints(30,"cook-"+String(id));
 return history;
}
function saveRecipeForm(){
 const form=$("recipeForm"); if(!form)return;
 form.addEventListener("submit",e=>{
   e.preventDefault(); const data=new FormData(form);
   const id="u-"+Date.now();
   const selected=[...form.querySelector('[name="category"]').selectedOptions].map(o=>o.value);
   const type=String(data.get("type")); const image=String(data.get("image")||"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85");
   const recipe={id,name:String(data.get("name")).trim(),creator:String(data.get("creator")||"Community Cook").trim(),type:type[0].toUpperCase()+type.slice(1),time:Number(data.get("time")),cuisine:String(data.get("cuisine")||"Homemade"),description:String(data.get("description")).trim(),image,tags:[type,...selected],ingredients:String(data.get("ingredients")).split(/\n+/).map(x=>x.trim()).filter(Boolean),steps:String(data.get("steps")).split(/\n+/).map(x=>x.trim()).filter(Boolean)};
   setStorage("ccRecipes",[...getUserRecipes(),recipe]); awardPoints(50,"recipe-"+id);
   const msg=form.querySelector(".form-message"); if(msg)msg.textContent="Recipe saved. +50 points.";
   form.reset();
 });
}
function initFilters(){
 document.querySelectorAll(".chip[data-filter]").forEach(chip=>chip.addEventListener("click",()=>{document.querySelectorAll(".chip[data-filter]").forEach(x=>x.classList.remove("active"));chip.classList.add("active");renderRecipes()}));
 $("searchInput")?.addEventListener("input",renderRecipes);
 const filters=[...document.querySelectorAll(".recipe-filter")];
 filters.forEach(filter=>filter.addEventListener("toggle",()=>{if(filter.open)filters.forEach(other=>{if(other!==filter)other.removeAttribute("open")})}));
 document.addEventListener("click",e=>{if(!e.target.closest(".recipe-filter"))filters.forEach(filter=>filter.removeAttribute("open"))});
 document.querySelectorAll("[data-recipe-filter]").forEach(input=>input.addEventListener("change",renderRecipes));
}
function selectedRecipeFilters(type){return [...document.querySelectorAll('[data-recipe-filter="'+type+'"]:checked')].map(x=>x.value)}
function initChallenge(){
 $("joinChallenge")?.addEventListener("click",()=>{
   if(localStorage.getItem("ccChallengeComplete")==="1"){ $("challengeStatus").textContent="Challenge already completed."; return}
   localStorage.setItem("ccChallengeJoined","1"); $("challengeStatus").textContent="You're in. Cook your version, then mark it complete.";
   const b=$("joinChallenge");b.textContent="Mark challenge complete";b.onclick=()=>{localStorage.setItem("ccChallengeComplete","1");awardPoints(75,"challenge-week-1");$("challengeStatus").textContent="Challenge complete. +75 points.";b.disabled=true;b.textContent="Completed"};
 });
 if(localStorage.getItem("ccChallengeComplete")==="1"){const b=$("joinChallenge");if(b){b.disabled=true;b.textContent="Completed"}}
}
function initLeaderboard(){
 const value=$("userPoints"); if(value)value.textContent=points()+" pts";
 const bar=$("progressBar"); if(bar)bar.style.width=Math.min(100,points()/250*100)+"%";
 const text=$("progressText"); if(text)text.textContent=Math.max(0,250-points())+" points to the next milestone.";
 $("logCook")?.addEventListener("click",()=>{addPoints(30,"cook");initLeaderboard();$("progressMessage").textContent="Cook logged. +30 points."});
}
window.RECIPES=RECIPES; window.allRecipes=allRecipes; window.findRecipe=findRecipe; window.recipeImage=recipeImage; window.addPoints=addPoints; window.awardPoints=awardPoints; window.points=points; window.logCook=logCook; window.storage=storage; window.setStorage=setStorage;
document.addEventListener("DOMContentLoaded",()=>{addOpenverseCredit();renderRecipe();saveRecipeForm();initFilters();initChallenge();initLeaderboard();loadRecipeLibrary()});
