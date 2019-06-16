### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)                  #corrected: def check_for_ace(card)
    if card.value = 1                    #corrected: if card.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)           #corrected: def highest_card(card1 card2)
  if card1.value > card2.value
    return card                           #corrected: return card1
  else
    return card2
  end
end                                        #corrected: this 'end' should be removed
end

def self.cards_total(cards)
  total                                    #corrected: total=0
  for card in cards
    total += card.value
                                           #corrected: missing end
    return "You have a total of" + total   #corrected: return "You have a total of #{total}"
  end                                      #corrected: this 'end' should be removed
end
```
