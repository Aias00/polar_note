package tests

import (
	"github.com/Aias00/polar_note/app/db"
	"testing"
	//	. "github.com/Aias00/polar_note/app/lea"
	//	"github.com/Aias00/polar_note/app/service"
	//	"gopkg.in/mgo.v2"
	//	"fmt"
)

func TestDBConnect(t *testing.T) {
	db.Init("mongodb://localhost:27017/leanote", "leanote")
}
