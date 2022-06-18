=begin
* Date: 6.17.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/ruby
* In My Own Words: 
    Take an integer that is at least 1 and return an array of numbers equal human years, cat years, and dog years respectively. The input is provided as an integer that represents human years. Cat years equal 15 for the first, 9 for the second, and 4 thereafter. Dog years equal 15 for the first, 9 for the second, and 5 thereafter.
* Test Conditions: 
    human_years_cat_years_dog_years(1), [1,15,15]
    human_years_cat_years_dog_years(2), [2,24,24]
    human_years_cat_years_dog_years(10), [10,56,64])
* Pseudocode: 
    1. Check for below or equal to 2 and handle 1 or 2
    2. If cat > 2: 24 + ((n - 2) * 4)
    3. If dog > 2: 24 + ((n - 2) * 5)
* Notes After Attempt:
=end

def human_years_cat_years_dog_years(human_years)
    if human_years <= 2
        return human_years == 2 ? [human_years, 24, 24] : [human_years, 15, 15]
    else 
        return [human_years, (24 + ((human_years - 2) * 4)), (24 + ((human_years - 2) * 5))]
    end
end 

puts(human_years_cat_years_dog_years(10))