package controllers

import (
	"github.com/revel/revel"
	//	"encoding/json"
	//	"gopkg.in/mgo.v2/bson"
	. "github.com/Aias00/polar_note/app/lea"
	"github.com/Aias00/polar_note/app/lea/captcha"
	//	"github.com/Aias00/polar_note/app/types"
	//	"io/ioutil"
	//	"fmt"
	//	"math"
	//	"os"
	//	"path"
	//	"strconv"
	"net/http"
	"io"
)

// 验证码服务
type Captcha struct {
	BaseController
}

type Ca string

func (r Ca) Apply(req *revel.Request, resp *revel.Response) {
	resp.WriteHeader(http.StatusOK, "image/png")
}

func (c Captcha) Get() revel.Result {
	c.Response.ContentType = "image/png"
	image, str := captcha.Fetch()
	out := io.Writer(c.Response.GetWriter())
	image.WriteTo(out)

	sessionId := c.Session["_ID"]
	//	LogJ(c.Session)
	//	Log("------")
	//	Log(str)
	//	Log(sessionId)
	Log("..")
	sessionService.SetCaptcha(sessionId, str)

	return c.Render()
}