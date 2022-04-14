function recursiveIsPalindrome(s){
	return helper(s,0,s.length-1)
}

function helper(s,left,right){
if(s[left] == ' '){
	// leftChar = s[left+1].toLowerCase()
	left += 1
}
if(s[right] == ' '){
	// rightChar = s[right-1].toLowerCase()
	right -= 1
}

leftChar = s[left].toLowerCase()
rightChar = s[right].toLowerCase()


if(left>right){
	return true
}
else if(leftChar != rightChar){
	return false 
}
else{
	return helper(s,left+1,right-1)
}
}