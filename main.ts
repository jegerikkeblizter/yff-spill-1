function startlevel () {
    if (true) {
    	
    } else {
    	
    }
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . 3 3 3 3 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999929999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999299999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999992999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444249999999999999999999999999999929999999999999999999
    9999999999999999999999999999999999999999999999999999999999999222222222999999999999999999999999944444444444444244449999999999999999999999999299999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999222299999999999999999994444444444444444244444499999999999999999999922999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999922222222222222222222224444444444444444444444999999999999999999299999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444499999999999999992999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444444444444444444444449999999999999929999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444999999999999929999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444499999999999299999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444444444444444444444444444449999999922999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444444444999999299999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444499992999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444499929999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444444444444444444444444444444444449299999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444444444444444444444444444444444442999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444444444444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444444444444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444444444444444999999999999999999999999999299999
    9999999999999999999999999999999999999999999999999992222222222222222222222222222222222222224444444444444444444444444444444444444499999999999999999999222222299999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444444444499999999922222222222999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444444444499992222299999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444444444492229999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994224444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999994244444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999922444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999294444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999992994444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999929994444444444444444444444444444444444444444444444499999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999299999444444444444444444444444444444444444444444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999992999999444444444444444444444444444444444444444444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999929999999444444444444444444444444444444444444444444444999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999299999999944444444444444444444444444444444444444444449999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999992999999999944444444444444444444444444444444444444444449999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999929999999999994444444444444444444444444444444444444444499999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444444444499999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444444444999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444444444444444444444444444449222222222222222222222222222999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444444444499999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444444444999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999944444444444444444444444444444449999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444444444499999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999444444444444444444444444444999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994444444444444444444444499999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992944444444444444444449999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992999944444444444449999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992999999999999999929999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992999999999999999992999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992999999999999999999299999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992999999999999999999929999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992999999999999999999992999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999299999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999992299999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999999929999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999999992999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999999999229999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929999999999999999999999999999929999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999992999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
